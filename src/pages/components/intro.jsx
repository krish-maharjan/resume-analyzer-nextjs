import Link from "next/link"

export default function Intro() {
    return (
        <section className="flex flex-row w-full pt-0">
            <div className="flex min-h-screen min-w-full justify-center items-start">
                <div className="flex items-center">
                    <div className="relative max-w-full">
                        <img src="./image/data.jpg" alt="image" className="min-w-[100vw] min-h-screen max-h-screen object-cover" />
                    </div>
                    <div className="absolute min-w-[100vw] h-screen flex justify-center items-center flex-col bg-neutral-200/90">
                        <h1 className="text-5xl font-bold text-center">Resume Analyzer</h1>
                        <h2 className="pt-6 pb-10 text-2xl text-center">Automatically analyze resumes, save time and effort. Try Resume Analyzer right now</h2>
                        <p className="text-center">Click on the button below to <strong>start analyzing resumes</strong> or <strong>view source code</strong> </p><br />
                        <div className="form-control">
                            <div>
                                <button className="btn btn-primary"><Link href='/resume'>Start Analyzing</Link></button>
                                <button className="btn btn-outline btn-primary"><Link href='https://github.com/krishmzn/resume-analyzer-nextjs'>View source code</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
