import { Router } from 'express';
import { getAllStudents, getStudentById } from '../controllers/contacts.controller.js';

const router = Router();

router.get('/', getAllStudents);
router.get('/:studentId', getStudentById);

export default router;
