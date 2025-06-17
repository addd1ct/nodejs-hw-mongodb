import { Contact } from '../models/contacts.models.js';

export async function fetchAllContacts() {
  return Contact.find();
}

export async function fetchContactById(contactId) {
  return Contact.findById(contactId);
}

export async function createContact(data) {
  return await Contact.create(data);
}

export async function updateContact(contactId, data) {
  return await Contact.findByIdAndUpdate(contactId, data, { new: true });
}

export async function deleteContact(contactId) {
  return await Contact.findByIdAndDelete(contactId);
}
