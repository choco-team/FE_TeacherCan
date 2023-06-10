import type { RoutePath } from '@Types/route';

const route = {
  calculatePath: (paths: RoutePath[]) => '/' + paths.join('/'),
};

export default route;
