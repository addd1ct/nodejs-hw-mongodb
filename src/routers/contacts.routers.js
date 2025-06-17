import { Router } from 'express';
import { getAllContacts, getContactById, createContact } from '../controllers/contacts.controllers.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getAllContacts));
router.get('/:contactId', ctrlWrapper(getContactById));
router.post('/', ctrlWrapper(createContact));
router.patch('/:contactId', ctrlWrapper(updateContact));
router.delete('/:contactId', ctrlWrapper(deleteContact));

export default router;
