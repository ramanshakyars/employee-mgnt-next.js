'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function StudentFormPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', major: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Student Data:', formData);
    
    // Programmatic Navigation: Redirect back to the list after saving
    router.push('/students');
  };

  return (
    <main style={{ padding: '2rem', maxWidth: '500px' }}>
      <h1>Add New Student</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Student Name:</label>
          <input 
            type="text" 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Major:</label>
          <input 
            type="text" 
            value={formData.major} 
            onChange={(e) => setFormData({ ...formData, major: e.target.value })} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '8px 16px' }}>Save Student</button>
      </form>
    </main>
  );
}