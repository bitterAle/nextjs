import React from 'react';

const WhyUs = () => {
    return (
        <div>
            <section className=' p-5  min-h-96 w-full bg-[url(https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/441027833_975828917578196_4573564442787552377_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH0ptyqSzzg4Qar6QciSgvgDNlrEKV0sl4M2WsQpXSyXj2jK6N8BX5AKNWHmDV__BzDjA-VWMTAOfrBpjaMdCsS&_nc_ohc=C3Xelp8tfqsQ7kNvgHIvAjo&_nc_ht=scontent-lhr8-2.xx&oh=00_AYDpHoUzy-D17yFkbgOi4_mnBQuOF-5ievTclEqEAVwQ_w&oe=6647E984)] bg-cover bg-center bg-no-repeat'>
                <h2 className=' text-4xl '>Why Choose Baron Holdings Ltd</h2>
                <p className=' p-5'>Best accomordation all round</p>

                <div className=' flex flex-wrap items-center justify-center mt-5 w-full gap-3'>
                    <div className=' text-center rounded-md bg-white text-black flex justify-center items-center min-h-48 flex-auto shadow-md '><p>Years in Realestate<br></br><span className=' text-5xl text-blue-700'>10+</span></p></div>
                    <div className=' text-center rounded-md bg-white text-black flex justify-center items-center min-h-48 flex-auto shadow-md '><p>Clients Served<br></br><span className=' text-5xl text-blue-700'>1792+</span></p></div>
                    <div className=' text-center rounded-md bg-white text-black flex justify-center items-center min-h-48 flex-auto shadow-md '><p>Properties Maintained<br></br><span className=' text-5xl text-blue-700'>58+</span></p></div>
                    <div className=' text-center rounded-md bg-white text-black flex justify-center items-center min-h-48 flex-auto shadow-md '><p>Projects Completed<br></br><span className=' text-5xl text-blue-700'>72+</span></p></div>
                </div>
            </section>
        </div>
    );
}

export default WhyUs;
