import express, { Application } from 'express';
import { routes } from './routes';
import session from 'express-session';
const app: Application = express();
const apiPort: String = process.env.PORT || '3000';

// setup
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// endpoints
app.use('/', routes);

// startup
app.listen(apiPort, () => console.log(`API kører på port ${apiPort}`));