import Link from 'next/link';

interface Props {
    params: Promise<{ id: string }>;
}

// Server Component receiving path parameters asynchronously
export default async function StudentDetailsPage({ params }: Props) {
    // Await the path params (Standard in recent Next.js App Router versions)
    const { id } = await params;

    return (
        <main style={{ padding: '2rem' }}>
            <Link href="/students">&larr; Back to Student List</Link>

            <h1 style={{ marginTop: '1rem' }}>Student Profile</h1>
            <div style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '8px' }}>
                <p><strong>Student ID:</strong> {id}</p>
                <p><strong>Name:</strong> Sample Student ({id})</p>
                <p><strong>Status:</strong> Active</p>
            </div>
        </main>
    );
}