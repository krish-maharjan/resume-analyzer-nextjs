import { useState } from "react"

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

    const [index, setIndex] = useState('');
    const length = 3;

    const handelPrevious = () => {
        const newIndex = index -1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handelNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex)
    };

    return(
        <section className='relative px-10'>
            <div className="shead">
                <h2>Our Work</h2>
                <p>Here are some work we've done</p>
            </div>
            {Object.entries(slides).map(([key, values]) => (
                <div className="absolute right-0">
                    <button onClick={handelPrevious} className="btn btn-circle">❮</button> 
                    <button onClick={handelNext} className="btn btn-circle">❯</button>
                </div>
            ))}

            <div className="carousel carousel-center rounded-box">
                {Object.entries(slides).map(([key, values]) => (
                    <div className="carousel-item max-w-[25%]" index={key} >
                        <img src={values[0].img} alt="Resume Analyzer" className="w-full h-auto object-cover" />
                    </div> 
                ))}
            </div>
        </section>
    )
}