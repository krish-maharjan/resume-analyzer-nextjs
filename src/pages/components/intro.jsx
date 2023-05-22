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
