import { Student } from '../models/contacts.models.js';

export async function fetchAllContacts() {
  return Student.find();
}

export async function fetchContactById(studentId) {
  return Student.findById(studentId);
}
