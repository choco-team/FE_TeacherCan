import { setupWorker } from 'msw';

import { authHandlers } from './authHandlers';
import { schoolHandlers } from './schoolHandlers';
import { userHandlers } from './userHandlers';

export const worker = setupWorker(
  ...userHandlers,
  ...schoolHandlers,
  ...authHandlers,
);
