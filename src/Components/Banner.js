import React from 'react'

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto x1:px-24 px-4 bg-gradient-to-r from-indigo-500 from -0% to -100%" >
      <div className='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>
      {/* text stuff*/}
        <div className='md:w-1/2 space-y-8 px-4'>  
          <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-sung'>Get the tastiest and freshest{" "} <span className='text-blue'>Food</span> ever</h2>
          <p className='text-x1 text-[#4A4A4A]'>Where each bite give the taste of Indian spices</p>
          <button className='btn bg-blue px-8 py-4 fond-semibold rounded-full'>Order Now</button>
        </div>
        {/*images stuff*/}
        <div className='md:w-1/2'>
          
          <img src="/images/home/banner.gif" alt=""  className='rounded-2xl'/>
          <div className='flex flex-col md:flex-row items-center justify-around -mt-14'>
          <div className='sm:flex hidden bg-white py-2  px-3 rounded-2xl items-center gap-4 shadow-md w-20'>
            <img src="/images/home/category/img3.png" alt="" className='rounded-2x1'/>
            <div className='space-y-1'>
            <h5 className='font-medium mb-1'>xyz meal</h5>
            <div className="rating rating-sm">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" readOnly />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked  readOnly/>
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" readOnly />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" readOnly/>
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" readOnly/>
</div>
          <p className='text-red'>$78.00</p>
          </div>
          </div>
          <div className='sm:flex hidden bg-white py-2  px-3 rounded-2xl items-center gap-4 shadow-md w-20'>
            <img src="/images/home/category/img2.png" alt="" className='rounded-2x1'/>
          <div className='space-y-1'>
            <h5 className='font-medium mb-1'>xyz meal</h5>
            <div className="rating rating-sm">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" readOnly/>
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked readOnly />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" readOnly />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" readOnly />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" readOnly/>
</div>
          <p className='text-red'>$78.00</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
