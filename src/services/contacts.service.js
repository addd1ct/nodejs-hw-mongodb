import { Student } from '../models/contacts.models';

export async function fetchAllStudents() {
  return Student.find();
}

export async function fetchStudentById(studentId) {
  return Student.findById(studentId);
}
