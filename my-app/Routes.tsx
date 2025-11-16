export const ROUTES = {
  HOME: "/internet_applications_development_frontend/",
  DATASETS: "/internet_applications_development_frontend/datasets",
}
export type RouteKeyType = keyof typeof ROUTES;
export const ROUTE_LABELS: {[key in RouteKeyType]: string} = {
  HOME: "Главная",
  DATASETS: "Датасеты",
};