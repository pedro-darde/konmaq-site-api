import { Router } from "express";
import { adaptRoute } from "../adapters/router-adapter";
import { makePageListCategory } from "../factories/category/pages-list-caretory";
import { makeListProductHomepageFactory } from "../factories/product/list-homepage-factory";

export default (route: Router) => {
    route.get('/pages/category', adaptRoute(makePageListCategory()))
    route.get("/product-homepage", adaptRoute(makeListProductHomepageFactory()));
}