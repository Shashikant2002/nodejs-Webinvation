const multer = require("multer");
const Theam = require("../model/theamModel");

const imgconfig = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "../uploads");
  },
  filename: (req, file, callBack) => {
    callBack(null, `image-${Date.now}. ${file.originalname}`);
  },
});

const isImage = (req, file, callBack) => {
  if (file.mimetype.startWith("image")) {
    callBack(null, true);
  } else {
    callBack(new Error("only image is allowed"));
  }
};

exports.upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

exports.createTheame = async (req, res) => {
//   console.log("start");
  res.send("data");
//   const { filename } = req.file;
//   const { title, liveSite } = req.body;

//   if (!filename || !title || !liveSite) {
//     res.status(401).send({ status: 401, message: "Fill All The Data" });
//   }

//   try {
//     const theameData = new Theam({
//       title: title,
//       liveSite: liveSite,
//       image: filename,
//     });

//     const finalData = await theameData.save();
//     res.status(201).json({
//       status: 201,
//       message: "Theame Created",
//       finalData,
//     });
//   } catch (err) {
//     res
//       .status(401)
//       .send({ status: 500, message: "Internal Server Error", err });
//   }
};
