import React from 'react'
import "./CardFlex.css"
import hotel from "../../assets/hotels/hotel-1.jpeg"
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Card({card}) {
  return (
    <div className='card-box'>
        <Swiper
            slidesPerView={1}
            spaceBetween={15}
            loop={true}
            mousewheel={true}
            cssMode={true}
            pagination
            modules={[Pagination, Navigation]}
            style={{height:"300px",width:"300px",color:"#fff"}}
            className="swiper-container"
            bulletClass={"background-color:#fff"}
        >

            {
                card.imgSrc.map((src,i)=>(
                    <SwiperSlide key={i}>
                        <img
                        src={src}
                        className="card-img"
                        />

                    </SwiperSlide>
                ))
            }
            
           

        </Swiper>
        

        {/* <img src={hotel} className="card-img"/> */}
        <div className='card-info-flex'>
            <h3 className='card-title'>{card.title}</h3>
            <div className='card-rating'>
                <StarIcon/>
                <p>{card.rating}</p>
            </div>
        </div>
        <p style={{marginTop:"-.4rem"}}>
            {card.desc}
        </p>
        <p style={{marginTop:"-.6rem"}}>
            {card.date}
        </p>
        <p style={{marginTop:"-.4rem"}}>
            <font style={{color:"black",fontWeight:"bolder"}}> {card.price} </font>night
        </p>
    </div>

  )
}

export default Card