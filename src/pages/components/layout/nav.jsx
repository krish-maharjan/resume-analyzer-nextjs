import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { parseCookies, destroyCookie } from 'nookies';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Nav(context) {
    const cookies = parseCookies(context);
    const token = cookies.token;

    const [clientWindowHeight, setClientWindowHeight] = useState("");

    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
    const [padding, setPadding] = useState(15);
    const [boxShadow, setBoxShadow] = useState(0);

    const [showModal, setShowModal] = useState(true);

    const router = useRouter()

    function toggleModal(){
        setShowModal(true)
    }

    // useEffect(() => {
    // }, [])

    function handleLogout() {
        console.log('clicked logout')
        destroyCookie(null, 'token', { path: '/' })
        destroyCookie(null, 'username', { path: '/' })

        setShowModal(false)
        router.push('/login');
    }


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        let backgroundTransparacyVar = clientWindowHeight / 600;

        if (backgroundTransparacyVar < 1) {
            let paddingVar = 15 - backgroundTransparacyVar * 20;
            let boxShadowVar = backgroundTransparacyVar * 0.1;
            setBackgroundTransparacy(backgroundTransparacyVar);
            setPadding(paddingVar);
            setBoxShadow(boxShadowVar);
        }
    }, [clientWindowHeight]);

    return (
        <nav className="navbar fixed top-0" style={{
            background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
            padding: `${padding}px 2rem`,
            boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}>
            <div className="navbar-start">
                <Link href='/resume' className="btn btn-ghost normal-case text-xl">ResumeAnalyzer</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <a>
                            Services
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-neutral-200">
                            <li><a>Business Automation</a></li>
                            <li><a>Resume Analysis</a></li>
                        </ul>
                    </li>
                    <li><a>About</a></li>
                </ul>
            </div>
            <div className="navbar-end">

                <ul className="menu menu-horizontal px-1">
                    {token ? (

                        <li tabIndex={0}>
                            <div className="avatar">
                                <FontAwesomeIcon className='text-3xl' icon={faUser} />
                            </div>
                            <ul className="p-2 bg-neutral-200">
                                <label htmlFor="my-modal-4" className="p-1 cursor-pointer" onClick={toggleModal}>logout</label>
                            </ul>
                        </li>
                    ) : (
                        <Link href='/login' className="btn btn-primary">
                            Login
                        </Link>
                    )}
                </ul>
            </div>
            
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            {showModal == true &&
                <>
                    <label htmlFor="my-modal-4" className="modal cursor-pointer">
                        <label className="modal-box relative flex flex-row justify-center items-center gap-5" htmlFor="">
                            <h3 className="text-lg font-bold">Are you sure?</h3>
                            <a className="mr-3 btn btn-primary" onClick={handleLogout}>Yes, Logout</a>
                        </label>
                    </label>
                </>
            }
            {/* } */}
        </nav>
    )
}