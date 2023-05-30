import Link from "next/link"

export default function Intro() {
    return (
        <section className="flex flex-row w-full pt-8">
            <div className="flex min-h-screen min-w-full justify-center items-start">
                <div className="flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-[50%] w-full  ">
                        <img src="./image/4.png" alt="image" className="w-full max-h-screen object-cover" />
                    </div>
                    <div className="lg:w-[50%] w-full">
                        <h1 className="text-5xl font-bold">Resume Analyzer</h1>
                        <p className="py-6">Automatically analyze resumes, save time and effort. Try Resume Analyzer right now</p>
                        <div className="my-10 px-24">
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="7" stroke="currentColor" class="animate-bounce w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                            </svg>
                        </div>
                        <div className="form-control">
                            <div className=''>
                                <button className="btn btn-primary"><Link href='/resume'>Take me to resume analzyer</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
