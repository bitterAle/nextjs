import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactPage from "@/components/ContactPage";
import Faqs from "@/components/Faqs";


export default function Page(){

    return (
        <>

        <Navbar/>

        <ContactPage/>

        <div className=" w-full p-5 ">
            <h1 className=" text-5xl font-bold p-5">Some of our Frequently Asked Questions</h1>
        <Faqs/>
        </div>
        
         <Footer/>
        </>
    )
}