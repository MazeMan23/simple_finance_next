import * as deepl from "deepl-node";
import IncomingForm from "formidable/src/Formidable";
import { v4 as uuidv4 } from "uuid";
import { unlinkSync, copyFileSync, mkdirSync, readFileSync } from "fs";
import mime from "mime-types";

// we're sending a file, so we tell next.js to not try and parse the file as JSON body
export const config = {
  api: {
    bodyParser: false,
    sizelimit: "10mb",
  },
};

// try to parse FormData from front-end
const asyncParse = (req) =>
  new Promise((resolve, reject) => {
    const form = new IncomingForm({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

export default async function translateText(req, res) {
  // only post requests so they're encrypted by HTTPS
  if (req.method !== "POST") {
    res.status(405).json({ error: "This API endpoint only accepts POST requests!" });
    return;
  }

  // TODO: Check for Azure AD B2C login
  // Calculate payment based on size (???)
  // Do payment

  // parse file
  let reqBody;
  try {
    reqBody = await asyncParse(req);
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ error: "Malformed input!" });
    return;
  }

  // get the file
  const file_object = reqBody.files.file;

  //get the input, output language
  let outputLanguage = reqBody.fields.outputLanguage;
  let inputLanguage = reqBody.fields.inputLanguage;

  // force lowercase on languages
  outputLanguage = outputLanguage.toLowerCase();
  inputLanguage = inputLanguage.toLowerCase();

  // this is because deepl is regarded
  if (outputLanguage === "en") {
    outputLanguage = "en-us";
  }

  // some useful variables:
  // - filepath: location of file on disk rn (ex: /var/folders/z5/tlr2tmx53sgf4lnh0q_nyc6w0000gn/T/edf06de4ecff659ba3ac76800)
  // - newFilename: filename of file on server (ex: edf06de4ecff659ba3ac76800)
  // - originalFilename: filename on the users computer (ex: Secure_Computing_2.pdf)
  // - mimetype: file type (ex: application/pdf, check against this for correct file btw)

  //check if file type is pdf, docx, or pptx
  if (
    file_object.mimetype != "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
    file_object.mimetype != "application/pdf" &&
    file_object.mimetype != "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ) {
    res.status(400).json({ error: "Incorrect file type" });
    return;
  }

  //check if file bigger than yo mama
  if (file_object.size > 10 * 1024 * 1024) {
    res.status(400).json({ message: "The file that you uploaded is too big!" });
    return;
  }

  //make copy of file because original one is regarded
  const file_id = uuidv4();
  const filedir = `${process.cwd()}/uploads/`;
  const extension = file_object.originalFilename.split(".").pop();
  const filepath = `${filedir}${file_id}.${extension}`;

  mkdirSync(filedir, { recursive: true });
  copyFileSync(file_object.filepath, filepath);

  const translator = new deepl.Translator(process.env.DEEPL_API_KEY);

  //check if correct output language
  if (
    !(await translator.getTargetLanguages()).find((language) => language.code.toLocaleLowerCase() == outputLanguage)
  ) {
    res.status(400).json({ error: outputLanguage });
    return;
  }
  //check if correct input language
  if (!(await translator.getSourceLanguages()).find((language) => language.code.toLocaleLowerCase() == inputLanguage)) {
    res.status(400).json({ error: "Unrecognized input language!" });
    return;
  }

  //generate a file path for the translated file
  let newFilePath = `translated_files/TranslationID_${file_id}.${extension}`;

  //simulate translation because it do be kinda expensive tho
  // copyFileSync(file_object.filepath, newFilePath);

  //TODO save the file in the user's folder.
  try {
    await translator.translateDocument(filepath, newFilePath, inputLanguage, outputLanguage);
  } catch (error) {
    // If the error occurs after the document was already uploaded,
    // documentHandle will contain the document ID and key
    if (error.documentHandle) {
      const handle = error.documentHandle;
      console.log(`Document ID: ${handle.documentId}, ` + `Document key: ${handle.documentKey}`);
    } else {
      console.log(`Error occurred during document upload: ${error}`);
    }
  }

  //delete file so we don't clog the server
  let final_file;
  try {
    final_file = readFileSync(newFilePath);
    unlinkSync(filepath);
  } catch (err) {
    res.satus(500).json({ error: "Internal server error! Please try again later!" });
    console.error(err);
  }

  console.log(mime.lookup(extension));
  console.log(`TranslationID_${file_id}.${extension}`);
  // all ok, send it
  res.setHeader("Content-Type", mime.lookup(extension));
  res.setHeader("Content-Disposition", `attachment; filename="TranslationID_${file_id}.${extension}"`);
  res.status(200).send(final_file);
}
