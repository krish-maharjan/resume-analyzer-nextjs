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

    const [bindex, setbIndex] = useState(4);
    const [findex, setfIndex] = useState(4);
    const length = Object.keys(slides).length;

    const handleBack = () => {
        setbIndex(bindex-3)
        if (bindex < 1){
            setbIndex(length)
        }
    }
    const handleForward = () => {
        setfIndex(findex+3)
        if (findex > length){
            setbIndex(1)
        }
    }

    return(
        <section className='relative px-10'>
            <div className="shead">
                <h2>Our Work</h2>
                <p>Here are some work we've done</p>
            </div>
        
            <div className="absolute right-0 flex flex-row gap-3">
                <a href={'#'+bindex} onClick={handleBack} className="btn btn-circle">❮</a> 
                <a href={'#'+findex} onClick={handleForward} className="btn btn-circle">❯</a>
            </div>

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