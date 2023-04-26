export default function LoginPage() {
    return (
        <section className="flex flex-col justify-center items-center my-16 xl:px-52 lg:px-32 md:px-16 sm:px-10 gap-5">
            <div className="card w-full bg-slate-50 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 max-w-fit">
                <form onSubmit='' className="card-body max-w-fit flex justify-center items-center p-9">
                    <h1 className="text-3xl mb-5"><strong>Login</strong></h1>
                    
                    <div className="">
                        <label className="input-group input-group-vertical text-black">Email</label>
                        <input type="email" className="input input-bordered w-full max-w-xs text-black"/>
                    </div>

                    <div>
                        <label className="input-group input-group-vertical text-black">Password</label>
                        <input type="password" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt text-red-950">Forgot Password?</span>
                        </label>
                    </div>

                    <div>
                        <button className="btn btn-primary">Login</button>
                    </div>

                </form>
            </div>
        </section>
    )
}