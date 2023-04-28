export default function Stats() {
    const stats = {
        'Project Completed': '324+',
        'Client Satisfaction': '100%',
        'Award': '15',
        'Expert Members': '48+',
    }
    console.log(typeof (stats), stats)

    return (
        <section className="flex justify-center items-center">
            <main className="h-96 min-h-[50vh] w-[98vw] flex gap-16 justify-center items-center bg-slate-400">
                <ul className="flex flex-row gap-16 justify-center items-center">
                    {Object.entries(stats).map(([key, value]) => (
                        <li className="flex flex-col gap-1 justify-center items-center">
                            <div className="text-4xl">{value}</div>
                            <div className="text-lg">{key}</div>
                        </li>
                    ))}
                </ul>
            </main>
        </section>
    )
}