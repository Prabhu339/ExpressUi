import React from 'react'
import fooda from '../S/Sassets/869102Q0A4644_4.jpg'
import food1 from '../S/Sassets/cor1.avif'
import food2 from '../S/Sassets/cor2.jpg'
import food from '../S/Sassets/cor3.jpg'




const Courosel = () => {
  return (
    <div className='container-fluid bg-dark'>
        <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    //aria-label="First slide"
                ></li>
                <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="1"
                   // aria-label="Second slide"
                ></li>
                <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="2"
                    //aria-label="Third slide"
                ></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img
                        src={food}
                        class=" d-block"
                        alt="First slide"
                        className='carosel'
                    />
                </div>
                <div class="carousel-item">
                    <img
                       src={food1}
                        class=" d-block"
                        alt="Second slide"
                         className='carosel'
                    />
                </div>
                <div class="carousel-item">
                    <img
                       src={food2}
                        class=" d-block"
                        alt="Third slide"
                         className='carosel'
                    />
                </div>
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        
    </div>
  )
}

export default Courosel