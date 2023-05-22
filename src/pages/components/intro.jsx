export default function Intro() {
    return (
        <section className="flex flex-row w-full mt-12">
            <div className="flex min-h-screen min-w-full justify-center items-start">
                <div className="flex flex-col lg:flex-row-reverse items-center">
                    <div className="lg:w-[50%] w-full  max-h-screen">
                        <img src="./image/4.png" alt="image" className="w-full h-auto object-cover" />
                    </div>
                    <div className="lg:w-[50%] w-full">
                        <h1 className="text-5xl font-bold">Resume Analyzer</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Explore Our Services" className="input input-bordered" />
                            <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
