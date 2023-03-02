import { useState, useEffect } from "react";
import {Animated} from "react-animated-css";

export  function Slider({slides}) {


    const [showSlide,setShowSlide] = useState(1);

    useEffect(()=>{
        const interval =  setInterval(() => {
            setShowSlide(prev=>{
                if(prev === 3){
                    return 1
                }else{
                    return prev + 1
                }
            })
        }, 4000);

        return () =>{
            clearInterval(interval)
        }
    },[])




    const moveSlider = (id) =>{
        setShowSlide(id)
    }

    const prevSlide = () =>{
        showSlide === 1 ? setShowSlide(slides.length) : setShowSlide(showSlide - 1);
    }

    const nextSlide = () =>{
        showSlide === slides.length  ? setShowSlide(1) : setShowSlide(showSlide + 1);
    
    }

  return (
    <div className="slider">
        <div className="slider-wrap">
            {
                slides.map(slide=>
                    <div key={slide.id}
                         className={slide.id === showSlide ? "slide active" : "slide"}>
                            <div className="slide-img" style={{backgroundImage: `url(${slide.url})`}}></div>
                            <div className="slide-title">
                            <Animated animationIn="bounceInLeft" animationOut="fadeOutLeft" isVisible={slide.id === showSlide ? true : false} Duration={3000}>
                                <h2>{slide.title}</h2>
                            </Animated>
                            </div>

                    </div>
                    )
            }
        </div>
        <div className="slider-indicators">
            {
                slides.map(slide=><span key={slide.id}
                                        className={slide.id === showSlide ? "active" : " "}
                                        onClick={()=>moveSlider(slide.id)}
                                         ></span>)
            }
        </div>
        <span className="slide-arrow slide-arrow-prev" onClick={prevSlide}></span>
        <span className="slide-arrow slide-arrow-next" onClick={nextSlide}></span>
    </div>
  )
}
