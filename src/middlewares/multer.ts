import multer from "multer";
import { v4 as uuid } from "uuid";  // this is package it is use for if we upload same file again 
//for other new product then it create saprate path for it becouse if we delete that product that same name photo for both
// has been deleted

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads");
  },
  filename(req, file, callback) {
    const id = uuid();
    const extName = file.originalname.split(".").pop();
    callback(null, `${id}.${extName}` ); 
  },
});

export const singleUpload = multer({ storage }).single("photo");
