import { setupWorker } from 'msw';

import { randomPickHandlers } from './randomPickHandlers';
import { schoolHandlers } from './schoolHandlers';
import { userHandlers } from './userHandlers';

export const worker = setupWorker(
  ...userHandlers,
  ...schoolHandlers,
  ...randomPickHandlers,
);
