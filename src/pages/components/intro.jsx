import Link from "next/link"
import '@component/styles/second.module.css'

export default function Intro() {
    return (
        <section className="flex md:flex-row flex-nowrap justify-center items-center gap-9 min-h-[100vh]  max-w-9xl m-auto bg-[#8ca7dd]">
            <div className="flex flex-col gap-3">
                <h3 className="text-5xl tracking-tighter font-extrabold text-neutral-50">Resume Analyzer</h3>
                <p className="text-sm text-neutral-100">
                    Optimize Your Efficiency
                    Streamline Resume and CV Analysis with Resume Analyzer
                </p>
                <Link href='/resume' className="btn btn-primary rounded-none shadow-2xl">
                    <button>
                        Start for free
                    </button>
                </Link>
            </div>
            <div className="relative md:w-7/12 backdrop-blur-3xl shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] rounded-lg">
                <video src="./resume-analyzer-video.mp4" autoPlay loop muted className="rounded-lg"></video>
                <div className="bg-[#4b6bfb40] opacity-10 h-full w-full absolute top-0 left-0 rounded-lg"></div>
            </div>
        </section>
    )
}
