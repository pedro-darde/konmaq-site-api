import { Router } from "express";
import multer from "multer";
import { fileDir } from "../../constants/fileDir";
import { adaptRoute } from "../adapters/router-adapter";
import { makeAddProductFactory } from "../factories/product/add-product-factory";
import { makeEditProductFactory } from "../factories/product/edit-product-factory";
import { makeListProductFactory } from "../factories/product/list-product-factory";
import { makeShowProductFactory } from "../factories/product/show-user-factory";
import { fileHandler } from "../handler/file";
import path from "path";
import { makeListProductHomepageFactory } from "../factories/product/list-homepage-factory";
export default (router: Router) => {
  
  const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', '..', fileDir),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    },
  })
  
  const upload = multer({ storage: storage })

  router.post("/product", upload.array('images'), fileHandler, adaptRoute(makeAddProductFactory()));
  router.get("/product/:id", adaptRoute(makeShowProductFactory()));
  router.get("/product", adaptRoute(makeListProductFactory()));
  router.get("/product-homepage", adaptRoute(makeListProductHomepageFactory()));
  router.patch("/product/:id", adaptRoute(makeEditProductFactory()));
};
