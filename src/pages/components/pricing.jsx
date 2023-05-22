export default function Pricing() {
    const plans = {
        'Basic Plan': [
            { 'price': 25 },
            { 'provided': ['100 analysis per month', 'Complete documentation', 'Integration help'] },
            { 'notprovided': ['Unlimited resume analysis', 'API Access', 'Video Tutorials', '24×7 phone & email support'] }
        ],
        'Gold Plan': [
            { 'price': 50 },
            { 'provided': ['100 analysis per month', 'Complete documentation', 'Integration help', 'Unlimited resume analysis', 'Video Tutorials', 'API Access', '24×7 phone & email support'] },
            { 'notprovided': [] } // empty array must be passed to avoid error
        ],
        'Standard Plan': [
            { 'price': 40 },
            { 'provided': ['100 analysis per month', 'Complete documentation', 'Integration help', 'Unlimited resume analysis', 'Video Tutorials'] },
            { 'notprovided': ['API Access', '24×7 phone & email support'] }
        ],
    }

    return (
        <section>
            <div className="shead">
                <h2>Pricing plans</h2>
                <p>Available pricing plans</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-10">

                {Object.entries(plans).map(([plan, details]) => (
                    <div className="card w-64 bg-base-100 shadow-xl p-7">
                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{plan}</h5>

                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">$</span>
                            <span className="text-5xl font-extrabold tracking-tight">{details[0].price}</span>
                            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                        </div>

                        <ul role="list" className="space-y-5 my-7">
                            {details[1].provided.map((item) => (
                                <li className="flex space-x-3">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{item}</span>
                                </li>
                            ))}
                            {details[2].notprovided.map((item) => (
                                <li className="flex space-x-3 line-through decoration-gray-500">
                                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="text-base font-normal leading-tight text-gray-500">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-accent">Choose plan</button>
                    </div>
                ))}
            </div>
        </section >

    )
}