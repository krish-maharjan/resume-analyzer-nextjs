import Link from "next/link"
import '@component/styles/second.module.css'

export default function Intro() {
    return (
        <section className="flex flex-row w-full pt-0 mb-0">
            <div className="flex min-h-screen min-w-full justify-center items-start">
                <div className="flex items-center">
                    <div className="relative max-w-full">
                        <img src="./image/figma.png" alt="image" className="min-w-[100vw] min-h-screen max-h-screen object-cover" />
                    </div>
                    <main className="absolute min-w-[100vw] h-screen flex justify-center items-center flex-col px-6 gap-0">
                        <h1 className="text-6xl font-black text-center">Resume Analyzer</h1>
                        <h2 className="pt-2 text-xl text-center">Optimize Your Efficiency</h2>
                        <h2 className="pb-8 text-xl text-center">Streamline Resume and CV Analysis with Resume Analyzer</h2>
                        {/* <p className="text-center">Start for free!!!</p><br /> */}
                        <div className="flex flex-col sm:flex-row">
                            <button className="btn btn-outline btn-primary rounded-none"><Link href='https://github.com/krishmzn/resume-analyzer-nextjs'>View source code</Link></button>
                            <button className="btn btn-primary rounded-none"><Link href='/resume'>Start Analyzing For Free!!!</Link></button>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )
}
