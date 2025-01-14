import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel'; // Slick JS
import "./index.css"
import { clientReviews } from '../../contants';

const Clients = () => {
  useEffect(() => {
    // Initialize Slick Carousel when the component is mounted
    $('.slick-carousel').slick({
      dots: true,             // Show navigation dots
      infinite: true,         // Infinite scroll
      speed: 1000,             // Transition speed
      slidesToShow: 1,        // Show 1 slide on mobile by default
      slidesToScroll: 1,      // Scroll 1 slide at a time
      autoplay: true,         // Enable autoplay
      autoplaySpeed: 3000,    // Autoplay speed
      responsive: [
        {
          breakpoint: 1024,   // For screens 1024px and below
          settings: {
            slidesToShow: 1,  // Show 2 slides
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,    // For screens 600px and below
          settings: {
            slidesToShow: 1,  // Show 1 slide
            slidesToScroll: 1,
          }
        }
      ]
    });

    return () => {
      // Cleanup slick initialization when component is unmounted
      $('.slick-carousel').slick('unslick');
    };
  }, []); // Empty array to ensure this effect runs only once when the component mounts

  return (
    <section className="c-space my-20 bg-gray-950 p-10 m-5 rounded-lg  shadow-xl shadow-purple-950">
      <h3 className="head-text text-center pt-6">
        What Others Think About Me
      </h3>
      <div className="mt-16 w-full h-full">
        {/* slick-carousel */}
        <div className="slick-carousel">
          {clientReviews.map(({id, name, review, img, position}) => (
            <div key={id} className="mt-8 flex flex-col items-center justify-center w-full gap-4">
              <div className="flex justify-center items-center">
                <img 
                  src={img} 
                  alt={`${name} profile`} 
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <div className="text-2xl font-bold text-gray-400 text-center">{name}</div>
              <div className="font-md text-xl text-gray-300 text-center">{position}</div>
              <div className="font-normal text-center text-gray-100 pb-6">
                {review}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
