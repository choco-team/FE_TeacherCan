import { setupWorker } from 'msw';

import { schoolHandlers } from './schoolHandlers';
import { userHandlers } from './userHandlers';

export const worker = setupWorker(...userHandlers, ...schoolHandlers);
