import translator from "deepl";

export default function validateTranslate(req, res) {
  const body = req.body;
  if (body.input.length == 0) {
    return res.status(400).json(body);
  } else {
    return translate(body.input, res);
  }
}

const translate = async (input, res) => {
  translator({
    free_api: true,
    text: input,
    source_lang: "EN",
    target_lang: "BG",
    auth_key: "1595754f-3030-9c84-088b-43a925753bb9:fx",
  })
    .then((result) => {
      return res
        .status(200)
        .json({ response: `${result.data.translations[0].text}` });
    })
    .catch((error) => {
      return res.status(400).json({ data: error });
    });
};

/*
body.inputLang == undefined ||
body.outputLang == undefined ||
body.inputLang == body.outputLang || */
