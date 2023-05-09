import { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from './api/authapi';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const token = await login(username, password);
      document.cookie = `token=${token}; path=/`;
      router.push('/'); // Redirect to the home page after successful login
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center my-16 mt-32 xl:px-52 lg:px-32 md:px-16 sm:px-10 gap-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
      </form>

      {error && <p>{error}</p>}
    </section>
  );
}
