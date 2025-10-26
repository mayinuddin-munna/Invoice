import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("general-invoice", "routes/general-invoice/index.tsx"),
  route("car-invoice", "routes/car-invoice/index.tsx"),
  route("standard-invoice", "routes/standard-invoice/index.tsx"),
  route("recurring-invoice", "routes/recurring-invoice/index.tsx"),
  route("credit-invoice", "routes/credit-invoice/index.tsx"),
  route("debit-invoice", "routes/debit-invoice/index.tsx"),
  route("commercial-invoice", "routes/commercial-invoice/index.tsx"),
  route("timesheet-invoice", "routes/timesheet-invoice/index.tsx"),
  route("interim-invoice", "routes/interim-invoice/index.tsx"),
  route("final-invoice", "routes/final-invoice/index.tsx"),
  route("retainer-invoice", "routes/retainer-invoice/index.tsx"),
  route("consolidated-invoice", "routes/consolidated-invoice/index.tsx"),
  // route("collective-invoice", "routes/collective-invoice/index.tsx"),
] satisfies RouteConfig;
