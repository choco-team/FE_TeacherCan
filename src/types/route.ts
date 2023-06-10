import ROUTE_PATH from '@Constant/routePath';

type RoutePath = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];

export type { RoutePath };
