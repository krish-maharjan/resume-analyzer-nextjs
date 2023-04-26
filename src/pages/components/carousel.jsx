import Image from 'next/image'

export default function Carousel() {
    const slides = {
        1: [
            {'img': '/image/4.png'},
        ],
        2: [
            {'img': '/image/2.png'},
        ],
        3: [
            {'img': '/image/3.png'},
        ],
        4: [
            {'img': '/image/5.png'},
        ],
        5: [
            {'img': '/image/4.png'},
        ],
        6: [
            {'img': '/image/4.png'},
        ],
        7: [
            {'img': '/image/4.png'},
        ],
        8: [
            {'img': '/image/4.png'},
        ],
        
    }

    return(
        <section className='relative'>
            {Object.entries(slides).map(([key, values]) => (
                <div className="absolute right-0">
                    <a href={key - 4} className="btn btn-circle">❮</a> 
                    <a href={key + 4} className="btn btn-circle">❯</a>
                </div>
            ))}

            <div className="carousel carousel-center rounded-box">
                {Object.entries(slides).map(([key, values]) => (
                    <div className="carousel-item max-w-[25%]" id={key} >
                        <img src={values[0].img} alt="Resume Analyzer" className="w-full h-auto object-cover" />
                    </div> 
                ))}
            </div>
        </section>
    )
}