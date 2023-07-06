import { setupWorker } from 'msw';

import { userHandlers } from './userHandlers';

export const worker = setupWorker(...userHandlers);
