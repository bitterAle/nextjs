import React from 'react';

const AboutHero = () => {
    return (
        <div>
            <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
     Build your dream home today with us</h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=""
          src="
          https://images.pexels.com/photos/7078851/pexels-photo-7078851.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p>
          A leading Real Estate and Property management vessel regionally that provides equitable quality service and trustworthy dealing in investments.
      
          </p>

          <p>
          Our client-centric approach means that we take the time to listen to your unique needs, concerns, and aspirations. We believe in building long-lasting relationships based on mutual trust and open communication. Whether you're a first-time homebuyer or an experienced investor, we will be by your side, offering personalized guidance and support to ensure your complete satisfaction. </p>
        </article>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default AboutHero;
