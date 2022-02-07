import React, { useState, useEffect } from 'react';
import './Slider.css';
import Images from './ImagesApi';

function Slider() {
    const [people,setPeople] = useState(Images);
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index, people]);
    
      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);

  return <>
    <div className="sliderBox">
        {
            people.map((data,personIndex)=>{

                let position = 'nextSlide';
                if (personIndex === index) {
                    position = 'activeSlide';
                }
                if (
                    personIndex === index - 1 ||
                    (index === 0 && personIndex === people.length - 1)
                ){
                    position = 'lastSlide';
                }

               return( 
               <article className={position} key={data.id}>
                   <img src={data.imgToUrl} alt=""></img>
                </article>
               );
            })
        }

        <button className='prev' onClick={() => setIndex(index - 1)}><i className="far fa-angle-left"></i></button>
        <button className='next' onClick={() => setIndex(index + 1)}><i className="far fa-angle-right"></i></button>
    </div>
  </>;
}

export default Slider;
