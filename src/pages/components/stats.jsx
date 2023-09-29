export default function Stats() {
    const stats = {
        'Project Completed': '324+',
        'Client Satisfaction': '100%',
        'Award': '15',
        'Expert Members': '48+',
    }

    return (
        <section className="flex justify-center w-full items-center p-0">
            <div className="hero min-h-fit min-w-full bg-[#e5e8f5]" style={{ backgroundImage: `url("./image/bg.png")` }}>
                <ul className="flex flex-col lg:flex-row gap-12 lg:gap-32 py-12 justify-center items-center">
                    {Object.entries(stats).map(([key, value]) => (
                        <li className="flex flex-col gap-2 justify-center items-center">
                            <div className="text-4xl text-neutral-900">{value}</div>
                            <div className="text-lg text-neutral-900">{key}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}