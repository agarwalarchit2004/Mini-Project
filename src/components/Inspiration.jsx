import React from 'react';

const Inspiration = () => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto p-4 md:p-8">
      <div className="lg:w-1/2 lg:mr-4 mb-8 lg:mb-0">
        <img
          src="https://m.media-amazon.com/images/I/61+BDdeWUDL._AC_UF1000,1000_QL80_.jpg"
          alt="Wall Painting"
          className="w-full h-30%"
        />
      </div>
      <div className="lg:w-1/2">
        <p className="text-3xl font-bold mb-4 lg:mb-6">
          Our Passion is Your{' '}
          <span className="text-pink-500 text-3xl ">Inspiration</span>
        </p>
        <p className="mb-4 lg:mb-6">
          With each Livary Wall we send you our passion for beautiful things
          for your home. The content of each wall is agreed with the Creators.
        </p>
        <button className="bg-purple-300 text-white px-4 py-2 rounded-full hover:bg-pink-500">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Inspiration;
