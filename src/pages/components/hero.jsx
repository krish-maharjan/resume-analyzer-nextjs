export default function Hero({title, description, button}) {
    return (
        <section className="min-w-full">
            <div className="hero min-h-screen min-w-full" style={{ backgroundImage: `url("/image/1.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{description}</p>
                        <button className="btn btn-primary">{button}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}