import { Router } from 'express';
export const routes = Router();

// Importer alle routes
import { newCommit } from './newCommit';

routes.use(newCommit);