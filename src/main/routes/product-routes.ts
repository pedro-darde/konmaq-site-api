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
import { makeListProductsForCategoryFactory } from "../factories/product/list-product-for-category";
import { adminAuth } from "../factories/middlewares/admin-auth";
import { makeFindByIdsProduct } from "../factories/product/find-by-ids-product-factory";

export default (router: Router) => {

    const storage = multer.diskStorage({
        destination: path.join(__dirname, '..', '..', fileDir),
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            cb(null, fileName);
        },
    })

    const upload = multer({ storage: storage })
    // rotas protegidas
    router.post("/product", adminAuth, upload.array('images'), fileHandler, adaptRoute(makeAddProductFactory()));
    router.patch("/product/:id", adminAuth, adaptRoute(makeEditProductFactory()));

    router.get("/product/:id", adminAuth, adaptRoute(makeShowProductFactory()));
    router.get("/product", adaptRoute(makeListProductFactory()));
    router.get('/order-product', adaptRoute(makeFindByIdsProduct()))
    router.get("/product-category/:category_id", adaptRoute(makeListProductsForCategoryFactory()))
};
