import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return (
        <section className="px-24">
            <div className="shead">
                <h2>Contact Us</h2>
                <p>Connect with us on various social media or message us</p>
            </div>

            {/* <div className="flex min-h-screen min-w-full justify-center items-start"> */}
            <div className="flex flex-row flex-wrap items-center lg:gap-10">

                <div className="w-fit min-w-[75vw]">
                    <div className="card w-full bg-slate-50 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90">
                        <form action="" className="card-body w-[45rem] max-w-[50rem] min-w-full ">
                            <div className="my-3">
                                <label htmlFor="email" className="input-group input-group-vertical text-black">Name</label>
                                <input className="input input-bordered w-full text-black"
                                    type="Text"
                                    name="Name"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="email" className="input-group input-group-vertical text-black">Email</label>
                                <input className="input input-bordered w-full text-black"
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="message" className="input-group input-group-vertical text-black">Message</label>
                                <textarea className="input input-bordered w-full text-black min-h-[7rem]"
                                    type="message"
                                    id="message"
                                    name="message"
                                    required
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <div className="my-3 flex flex-row justify-between">
                                <button className='btn btn-accent'>Submit</button>

                                <div className="flex flex-row gap-3 justify-center items-center">
                                    <a href="/resume">
                                    <FontAwesomeIcon className='text-4xl' icon={faFacebook} />
                                    </a>
                                    <a href="/resume">
                                    <FontAwesomeIcon className='text-4xl' icon={faTwitter} />
                                    </a>
                                    <a href="/resume">
                                    <FontAwesomeIcon className='text-4xl' icon={faInstagram} />
                                    </a>
                                    <a href="/resume">
                                    <FontAwesomeIcon className='text-4xl' icon={faLinkedin} />
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
            {/* </div> */}
        </section>
    )
}