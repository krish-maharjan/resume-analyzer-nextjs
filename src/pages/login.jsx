import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { login } from './api/authapi';
import Link from 'next/link';

import Cookies from 'js-cookie';

import Modal from "./components/layout/modal";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function LoginPage() {

  const router = useRouter();
  useEffect(() => {
    // Check if the user is authenticated
    const token = Cookies.get("token");
    if (token) {
      // Redirect to the login page if not authenticated
      router.push("/");
    }
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setShowModal(true)

    try {
      const token = await login(username, password);
      document.cookie = `token=${token}; path=/`;
      document.cookie = `username=${username}; path=/`;
      router.push('/resume'); // Redirect to the home page after successful login
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // for closing modal
  const handleClose = (e) => {
    e.preventDefault();
    setShowModal(false);
  }

  return (
    <section className="flex flex-col justify-center items-center my-16 mt-32 xl:px-52 lg:px-32 md:px-16 sm:px-10 gap-5">

      <div className="card w-full bg-slate-50 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 max-w-fit">

        <form onSubmit={handleSubmit} className="card-body max-w-fit flex justify-center items-center p-9">
          <h1 className="text-3xl mb-5"><strong>Login</strong></h1>
          <div>
            <label htmlFor="username" className="text-sm input-group input-group-vertical text-black">Username:</label>
            <input type="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="input input-bordered w-full max-w-xs text-black" />
          </div>

          <div>
            <label htmlFor="password" className="text-sm input-group input-group-vertical text-black">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered w-full max-w-xs text-black" />
            <label className="text-sm input-group input-group-vertical text-brand-s"> <Link href='/register'>Not registered yet?</Link></label>
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary w-full">{loading ? 'logging in...' : 'Login'}</button>

        </form>
      </div>

      {error &&
        <Modal show={showModal}>
          <div className="flex flex-col flex-wrap gap-2 justify-center items-center">
            <div className="flex flex-row flex-wrap justify-center items-center gap-1">
              <FontAwesomeIcon className='text-2xl' icon={faCircleXmark} />
              <h1 className="text-lg">{error}</h1>
            </div>
            <a onClick={handleClose}>
              <button className="btn btn-primary">try again</button>
            </a>
          </div>
        </Modal>
      }
    </section>
  );
}
