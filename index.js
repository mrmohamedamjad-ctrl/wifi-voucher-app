import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';

import authRoutes from './routes.auth.js';
import voucherRoutes from './routes.vouchers.js';
import paymentRoutes from './routes.payments.js';
import expenseRoutes from './routes.expenses.js';
import collectionRoutes from './routes.collections.js';
import reportRoutes from './routes.reports.js';
import { db } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Swagger
const swaggerDoc = YAML.load(path.join(__dirname, 'openapi.yaml'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/', (req,res)=> res.redirect('/docs'));

app.use('/auth', authRoutes);
app.use('/vouchers', voucherRoutes);
app.use('/payments', paymentRoutes);
app.use('/expenses', expenseRoutes);
app.use('/collections', collectionRoutes);
app.use('/reports', reportRoutes);

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
  console.log(`API running on http://localhost:${port} (Swagger at /docs)`);
});
