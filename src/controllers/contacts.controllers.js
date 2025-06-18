import { fetchAllContacts, fetchContactById, createContact as createContactService, updateContact as updateContactService, deleteContact as deleteContactService } from '../services/contacts.service.js';
import createHttpError from 'http-errors';

export async function getAllContacts(req, res) {
  const contacts = await fetchAllContacts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
}

export async function getContactById(req, res) {
  const { contactId } = req.params;
  const contact = await fetchContactById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
}

export async function createContact(req, res) {
  const newContact = await createContactService(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: newContact,
  });
}

export async function updateContact(req, res) {
  const { contactId } = req.params;
  const updated = await updateContactService(contactId, req.body);

  if (!updated) {
  throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: updated,
  });
}

export async function deleteContact(req, res) {
  const { contactId } = req.params;
  const deleted = await deleteContactService(contactId);

  if (!deleted) {
    throw createHttpError(404, 'Contact not found');
  }  

  res.status(204).send();
}
