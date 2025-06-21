import pool from '../../db';
import Link from 'next/link';

export default async function StudentsPage() {
  const res = await pool.query('SELECT * FROM students ORDER BY id');
  const students = res.rows;

  return (
    <main style={{ padding: 32 }}>
      <h1>Students</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>
                <Link href={`/students/${student.id}`}>{student.name}</Link>
              </td>
              <td>{student.email}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav style={{ marginTop: 16 }}>
        <Link href="/" className="btn">Back to Home</Link>
      </nav>
    </main>
  );
}
