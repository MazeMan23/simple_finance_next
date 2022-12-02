import { readFileSync } from "fs";

const handler = async (req, res) => {
  //generate needed variables for download
  const { _path } = req.query;
  const name = _path.split(/(\\|\/)/g).pop();
  const ext = _path.split(".").pop();

  let fb = readFileSync(_path);

  res.setHeader("Content-Type", `application/${ext}`);
  res.setHeader("Content-Disposition", `attachment; filename=${name}`);
  res.status(200);
  res.send(fb);
};

export default handler;
