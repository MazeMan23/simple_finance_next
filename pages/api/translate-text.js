import * as deepl from "deepl-node";

export default async function translateText(req, res) {
  // only post requests so they're encrypted by HTTPS
  if (req.method !== "POST") {
    res.status(405).json({ error: "This API endpoint only accepts POST requests!" });
    return;
  }

  // TODO: Check for Azure AD B2C login
  // Calculate payment based on size (???)
  // Do payment

  // get and check input
  let { input, inputLanguage, outputLanguage } = req.body;
  if (!input || !inputLanguage || !outputLanguage) {
    res.status(400).json({ error: "Missing parameters!" });
    return;
  }

  // force lowercase on languages
  inputLanguage = inputLanguage.toLowerCase();
  outputLanguage = outputLanguage.toLowerCase();

  // don't try to translate the same language
  if (inputLanguage === outputLanguage) {
    res.status(400).json({ error: "Input and output language must be different!" });
    return;
  }

  // this is because deepl is regarded
  if (outputLanguage === "en") {
    outputLanguage = "en-us";
  }

  // don't waste API calls on empty strings
  const trimmed_input = input.trim();
  if (trimmed_input.length === 0) {
    res.status(400).json({ error: "Empty input string!" });
    return;
  }

  // create deepl translator with API key
  const translator = new deepl.Translator(process.env.DEEPL_API_KEY);

  // check if language is present in deepl lib
  if (!(await translator.getSourceLanguages()).find((language) => language.code.toLocaleLowerCase() == inputLanguage)) {
    res.status(400).json({ error: "Unrecognized input language!" });
    return;
  }
  if (
    !(await translator.getTargetLanguages()).find((language) => language.code.toLocaleLowerCase() == outputLanguage)
  ) {
    res.status(400).json({ error: "Unrecognized output language!" });
    return;
  }

  // call API
  const result = await translator.translateText(input, inputLanguage, outputLanguage);

  // all ok, send it
  res.status(200).json({ output: result.text });
}
