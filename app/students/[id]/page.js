import pool from '../../../db';
import Link from 'next/link';

export default async function StudentDetail({ params }) {
  const id = params.id;
  // Validate that id is a positive integer
  if (!/^[0-9]+$/.test(id)) {
    return (
      <main style={{ padding: 32 }}>
        <h1>Invalid student ID</h1>
        <Link href="/students">Back to Students</Link>
      </main>
    );
  }
  const res = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
  const student = res.rows[0];

  if (!student) {
    return (
      <main style={{ padding: 32 }}>
        <h1>Student Not Found</h1>
        <Link href="/students">Back to Students</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: 32 }}>
      <h1>Student Details</h1>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>Course:</b> {student.course}</p>
      <nav style={{ marginTop: 16 }}>
        <Link href="/students">Back to Students</Link>
      </nav>
    </main>
  );
}
