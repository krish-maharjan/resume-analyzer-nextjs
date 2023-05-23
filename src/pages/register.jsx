import { useState } from 'react';
import { useRouter } from 'next/router';
import { register } from '../../lib/register';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const token = await register(email, username, password);
      document.cookie = `token=${token}; path=/`;
      router.push('/login'); // Redirect to the home page after successful register
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center my-16 xl:px-52 lg:px-32 md:px-16 sm:px-10 min-w-[23rem] gap-5">

      <div className="card min-w-[327px] w-full bg-slate-50 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 max-w-fit">

        <form onSubmit={handleSubmit} className="card-body max-w-fit flex justify-center items-center p-9">
          <h1 className="text-3xl mb-5"><strong>Register</strong></h1>

          <div>
            <label htmlFor="email" className="text-sm input-group input-group-vertical text-black">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered w-full max-w-xs text-black" />
          </div>

          <div>
            <label htmlFor="username" className="text-sm input-group input-group-vertical text-black">Username:</label>
            <input type="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="input input-bordered w-full max-w-xs text-black" />
          </div>

          <div>
            <label htmlFor="password" className="text-sm input-group input-group-vertical text-black">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered w-full max-w-xs text-black" />
          </div>

            <button type="submit" disabled={loading} className="btn btn-primary w-full">{loading ? 'Loading...' : 'Register'}</button>

        </form>
      </div>

      {error && <p>{error}</p>}
    </section>
  );
}
