import React from 'react';


const AboutPage = () => {
    return (
        <div>
            <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="
            https://images.pexels.com/photos/7078168/pexels-photo-7078168.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center  bg-blue-700">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-blue-700"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-4xl font-bold sm:text-3xl">
        Build your dreams with us  </h2>

          <p className="mt-4  text-black">
          We take pride in our reputation for honesty, integrity, and ethical practices. Our team of experienced professionals is dedicated to protecting your best interests every step of the way. From providing transparent and accurate information to navigating complex negotiations with your goals in mind, we are your trusted partners throughout the entire process. </p>

          <a
            href="#"
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default AboutPage;
