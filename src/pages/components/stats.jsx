export default function Stats() {
    const stats = {
        'Project Completed': '324+',
        'Client Satisfaction': '100%',
        'Award': '15',
        'Expert Members': '48+',
    }

    return (
        <section className="flex justify-center w-full items-center">
            <main className="min-h-[50vh] h-fit w-full flex gap-16 justify-center items-center bg-brand-p">
                <ul className="flex flex-col lg:flex-row gap-12 lg:gap-32 py-12 justify-center items-center">
                    {Object.entries(stats).map(([key, value]) => (
                        <li className="flex flex-col gap-2 justify-center items-center">
                            <div className="text-4xl text-neutral-50">{value}</div>
                            <div className="text-lg text-neutral-50">{key}</div>
                        </li>
                    ))}
                </ul>
            </main>
        </section>
    )
}