import Link from "next/link"
import '@component/styles/second.module.css'

export default function Intro() {
    return (
        <section className="flex flex-row w-full pt-0 mb-0">
            <div className="flex min-h-screen min-w-full justify-center items-start">
                <div className="flex items-center">
                    <div className="relative max-w-full">
                        <img src="./image/data.jpg" alt="image" className="min-w-[100vw] min-h-screen max-h-screen object-cover" />
                    </div>
                    <main className="absolute min-w-[100vw] h-screen flex justify-center items-center flex-col bg-neutral-50/90 px-6">
                        <h1 className="text-5xl font-bold text-center">Resume Analyzer</h1>
                        <h2 className="pt-6 pb-10 text-2xl text-center">Optimize Your Efficiency: Streamline Resume and CV Analysis with Resume Analyzer</h2>
                        <p className="text-center">Start for free!!!</p><br />
                        <div className="form-control">
                            <div>
                                <button className="btn btn-outline btn-primary"><Link href='https://github.com/krishmzn/resume-analyzer-nextjs'>View source code</Link></button>
                                <button className="btn btn-primary"><Link href='/resume'>Start Analyzing</Link></button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )
}
