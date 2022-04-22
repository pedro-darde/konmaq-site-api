import { Router } from "express";
import { adaptRoute } from "../adapters/router-adapter";
import { makePageListCategory } from "../factories/category/pages-list-caretory";

export default (route: Router) => {
    route.get('/pages/category', adaptRoute(makePageListCategory()))
}