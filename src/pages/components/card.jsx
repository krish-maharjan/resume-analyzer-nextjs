export default function Card() {
    const cards = {
        'Resume-Analysis': [
            {'title': 'Resume Analysis'},
            {'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, atque.'}
        ],

        'Resume-Analysis': [
            {'title': 'Resume Analysis'},
            {'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, atque.'}
        ],

        'Resume-Analysis': [
            {'title': 'Resume Analysis'},
            {'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, atque.'}
        ]
    }
    
    return(
        <section>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Resume Analysis</h2>
                    <p></p>
                </div>
                <figure><img src="" alt="Analysis" /></figure>
            </div>
        </section>
    )
}