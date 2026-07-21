'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Reset link requested for:', email);
    };

    return (
        <main style={{ padding: '2rem', maxWidth: '400px' }}>
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Enter your email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '8px 16px' }}>Send Reset Link</button>
            </form>

            <p style={{ marginTop: '1rem' }}>
                <Link href="/login">Back to Login</Link>
            </p>
        </main>
    );
}