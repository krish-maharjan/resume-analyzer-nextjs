export default function Card() {
    const cards = {
        'card1': [
            {'title': 'Resume Analysis'},
            {'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, atque.'},
            {'img': '/image/2.png'},
            {'alttxt': 'Analysis'},
        ],

        'card2': [
            {'title': 'Resume Analysis'},
            {'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, atque.'},
            {'img': '/image/3.png'},
            {'alttxt': 'Analysis'},
        ],

        'card3': [
            {'title': 'Resume Analysis'},
            {'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, atque.'},
            {'img': '/image/4.png'},
            {'alttxt': 'Analysis'},
        ],
    }
    
    return(
        <section>
            <div className="shead">
                <h2>Our Services</h2>
                <p>Checkout the services we provide</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-11 ">
                {Object.entries(cards).map(([key, values]) => (
                    <div className="card w-80 h-80 2xl:w-96 bg-base-100 shadow-xl">
                        <figure><img src={values[2].img} alt={values[3].alttxt} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{values[0].title}</h2>
                            <p>{values[1].description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}