import { fetchAllStudents, fetchStudentById } from '../services/contacts.service.js';

export async function getAllStudents(req, res) {
  const students = await fetchAllStudents();
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: students,
  });
}

export async function getStudentById(req, res) {
  const { studentId } = req.params;
  const student = await fetchStudentById(studentId);

  if (!student) {
    return res.status(404).json({ message: 'Contact not found' });
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${studentId}!`,
    data: student,
  });
}
