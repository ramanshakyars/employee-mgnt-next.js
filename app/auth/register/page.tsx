'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registering user:', formData);
    };

    return (
        <main style={{ padding: '2rem', maxWidth: '400px' }}>
            <h1>Register Account</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '8px 16px' }}>Create Account</button>
            </form>

            <p style={{ marginTop: '1rem' }}>
                Already have an account? <Link href="/login">Login</Link>
            </p>
        </main>
    );
}