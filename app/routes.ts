import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("general-invoice", "routes/general-invoice/index.tsx"),
  route("car-invoice", "routes/car-invoice/index.tsx"),
  route("standard-invoice", "routes/standard-invoice/index.tsx"),
  route("recurring-invoice", "routes/recurring-invoice/index.tsx"),
] satisfies RouteConfig;
