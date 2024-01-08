import { Router } from "express";
import { healthRoutes } from "./health";
import { productRoutes } from "./product";

const routes = Router();

routes.use("/health", healthRoutes);
routes.use("/product", productRoutes);

export { routes };
