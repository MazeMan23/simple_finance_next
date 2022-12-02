import * as deepl from "deepl-node";
import IncomingForm from "formidable/src/Formidable";

// we're sending a file, so we tell next.js to not try and parse the file as JSON body
export const config = {
  api: {
    bodyParser: false,
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
  // some useful variables:
  // - filepath: location of file on disk rn (ex: /var/folders/z5/tlr2tmx53sgf4lnh0q_nyc6w0000gn/T/edf06de4ecff659ba3ac76800)
  // - newFilename: filename of file on server (ex: edf06de4ecff659ba3ac76800)
  // - originalFilename: filename on the users computer (ex: Secure_Computing_2.pdf)
  // - mimetype: file type (ex: application/pdf, check against this for correct file btw)

  // all ok, send it
  res.status(200).json({ url: "" });
}
