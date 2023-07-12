import React, {useState} from 'react'
import slide1 from "../assets/slider/slide1.png"
import slide2 from "../assets/slider/slide2.jpg"
import slide3 from "../assets/slider/slide3.jpg"
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import "./Slider.css"
const Slider = () => {
  const slides = [
    {
      url: slide1
    },
    {
      url: slide2
    },
    {
      url: slide3
    }
  ];

  const [image, setImage] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = image === 0;
    const nouvImage = isFirstSlide ? slides.length - 1 : image - 1;
    setImage(nouvImage);
  }
  const nextSlide = () => {
    const isLastSlide = image === slides.length - 1;
    const nouvImage = isLastSlide ? 0 : image + 1;
    setImage(nouvImage)
  }
  const goToSlide = (slideIndex) => {
    setImage(slideIndex);
  }
  
  return (
    <div className='h-[750px] w-full m-auto py-16 px4 top-5 relative group a'>
      <div style={{backgroundImage: `url(${slides[image].url})` }} className='w-full h-full bg-top bg-cover duration-500'>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white/60 cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white/60 cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
            <RxDotFilled/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider