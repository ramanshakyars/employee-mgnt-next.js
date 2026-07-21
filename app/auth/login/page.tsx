'use client'; // Needed for forms, state, and event handling

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password });
        // Add authentication logic or call a Server Action here
    };

    return (
        <main style={{ padding: '2rem', maxWidth: '400px' }}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '8px 16px' }}>Sign In</button>
            </form>

            <p style={{ marginTop: '1rem' }}>
                <Link href="/forgot-password">Forgot password?</Link> | <Link href="/register">Register</Link>
            </p>
        </main>
    );
}