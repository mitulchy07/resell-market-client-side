import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className='carousel max-h-96 container mx-auto'>
        <div id='slide1' className='carousel-item relative w-full'>
          <img
            src='https://www.autovista.in/assets/images/background/Sell-car-in-30-min.jpg'
            alt=''
            className='w-full '
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <img
            src='https://www.driveandsave.com/wp-content/uploads/2018/08/how-to-sell-your-car-1200x630.png'
            alt=''
            className='w-full'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <img
            src='https://baronsvw.co.za/media/3878/barons-vw-sell-your-car-banner.jpg'
            alt=''
            className='w-full'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide4' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide4' className='carousel-item relative w-full'>
          <img
            src='https://www.evanshalshaw.com/-/media/evanshalshaw/sell-your-car/hero-banner/sell-your-car.ashx'
            alt=''
            className='w-full'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
