import { Contact } from '../models/contacts.models.js';

export async function fetchAllContacts() {
  return Contact.find();
}

export async function fetchContactById(contactId) {
  return Contact.findById(contactId);
}
