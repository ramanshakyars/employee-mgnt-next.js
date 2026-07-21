import Link from 'next/link';

// Mock Data
const students = [
    { id: '101', name: 'John Doe', major: 'Computer Science' },
    { id: '102', name: 'Jane Smith', major: 'Information Technology' },
    { id: '103', name: 'Alex Johnson', major: 'Software Engineering' },
];

// Server Component (Default in Next.js)
export default function StudentListPage() {
    return (
        <main style={{ padding: '2rem' }}>
            <h1>Student Directory</h1>

            <div style={{ marginBottom: '1rem' }}>
                <Link href="/students/new" style={{ color: 'blue' }}>
                    + Add New Student
                </Link>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {students.map((student) => (
                    <li
                        key={student.id}
                        style={{ padding: '10px', borderBottom: '1px solid #ccc' }}
                    >
                        <strong>{student.name}</strong> - {student.major}{' '}
                        <Link href={`/students/${student.id}`} style={{ marginLeft: '10px', color: 'blue' }}>
                            View Profile
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}