import express from 'express';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDocument = path.join(__dirname, '../../docs/swagger.json');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(null, {
  swaggerUrl: '/swagger.json',
}));

export default router;
