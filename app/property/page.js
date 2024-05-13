import Footer from "@/components/Footer";
import Prop from "@/components/Prop";
import Navbar from "@/components/Navbar";

const PropData = [
    {
      id:1,
      imageUrl:'https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/440311887_977057177455370_4113922743546001469_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHWoxMQAfvfMtLs_OcOWCiiCNUdiosFv14I1R2KiwW_XlgVgroJHW9Mfu20hZ32tnlaKiULklaLfBn8nesHwzES&_nc_ohc=BM492nLlcS4Q7kNvgHbkvQK&_nc_ht=scontent-lhr6-1.xx&oh=00_AYAJCd7OX-woGdtl_0GV90CHfiiX3LhQp3G7YmW6P5ojqg&oe=6647DD3D',
      title:'Acacia Heights',
      size: '1 bedroom',
      location:'Ongata Rongai',
      price:'19,000',
  
    },
    {
      id:2,
      imageUrl:'https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/440311887_977057177455370_4113922743546001469_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHWoxMQAfvfMtLs_OcOWCiiCNUdiosFv14I1R2KiwW_XlgVgroJHW9Mfu20hZ32tnlaKiULklaLfBn8nesHwzES&_nc_ohc=BM492nLlcS4Q7kNvgHbkvQK&_nc_ht=scontent-lhr6-1.xx&oh=00_AYAJCd7OX-woGdtl_0GV90CHfiiX3LhQp3G7YmW6P5ojqg&oe=6647DD3D',
      title:'Acacia Heights',
      size: '1 bedroom',
      location:'Ongata Rongai',
      price:'19,000',
  
    },
    {
      id:3,
      imageUrl:'https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/440311887_977057177455370_4113922743546001469_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHWoxMQAfvfMtLs_OcOWCiiCNUdiosFv14I1R2KiwW_XlgVgroJHW9Mfu20hZ32tnlaKiULklaLfBn8nesHwzES&_nc_ohc=BM492nLlcS4Q7kNvgHbkvQK&_nc_ht=scontent-lhr6-1.xx&oh=00_AYAJCd7OX-woGdtl_0GV90CHfiiX3LhQp3G7YmW6P5ojqg&oe=6647DD3D',
      title:'Acacia Heights',
      size: '1 bedroom',
      location:'Ongata Rongai',
      price:'19,000',
  
    },
    {
      id:4,
      imageUrl:'https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/440311887_977057177455370_4113922743546001469_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHWoxMQAfvfMtLs_OcOWCiiCNUdiosFv14I1R2KiwW_XlgVgroJHW9Mfu20hZ32tnlaKiULklaLfBn8nesHwzES&_nc_ohc=BM492nLlcS4Q7kNvgHbkvQK&_nc_ht=scontent-lhr6-1.xx&oh=00_AYAJCd7OX-woGdtl_0GV90CHfiiX3LhQp3G7YmW6P5ojqg&oe=6647DD3D',
      title:'Acacia Heights',
      size: '1 bedroom',
      location:'Ongata Rongai',
      price:'19,000',
  
    },
    {
      id:5,
      imageUrl:'https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/440311887_977057177455370_4113922743546001469_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHWoxMQAfvfMtLs_OcOWCiiCNUdiosFv14I1R2KiwW_XlgVgroJHW9Mfu20hZ32tnlaKiULklaLfBn8nesHwzES&_nc_ohc=BM492nLlcS4Q7kNvgHbkvQK&_nc_ht=scontent-lhr6-1.xx&oh=00_AYAJCd7OX-woGdtl_0GV90CHfiiX3LhQp3G7YmW6P5ojqg&oe=6647DD3D',
      title:'Acacia Heights',
      size: '1 bedroom',
      location:'Ongata Rongai',
      price:'19,000',
  
    },
    {
      id:6,
      imageUrl:'https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/440311887_977057177455370_4113922743546001469_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHWoxMQAfvfMtLs_OcOWCiiCNUdiosFv14I1R2KiwW_XlgVgroJHW9Mfu20hZ32tnlaKiULklaLfBn8nesHwzES&_nc_ohc=BM492nLlcS4Q7kNvgHbkvQK&_nc_ht=scontent-lhr6-1.xx&oh=00_AYAJCd7OX-woGdtl_0GV90CHfiiX3LhQp3G7YmW6P5ojqg&oe=6647DD3D',
      title:'Acacia Heights',
      size: '1 bedroom',
      location:'Ongata Rongai',
      price:'19,000',
  
    },
    {
      id:7,
      imageUrl:'https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/440311887_977057177455370_4113922743546001469_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHWoxMQAfvfMtLs_OcOWCiiCNUdiosFv14I1R2KiwW_XlgVgroJHW9Mfu20hZ32tnlaKiULklaLfBn8nesHwzES&_nc_ohc=BM492nLlcS4Q7kNvgHbkvQK&_nc_ht=scontent-lhr6-1.xx&oh=00_AYAJCd7OX-woGdtl_0GV90CHfiiX3LhQp3G7YmW6P5ojqg&oe=6647DD3D',
      title:'Acacia Heights',
      size: '1 bedroom',
      location:'Ongata Rongai',
      price:'19,000',
  
    },
  ]

export default function Page(){

    return (
        <>

        <Navbar/>

        <Prop Propertys={PropData}/>



        <Footer/>
        </>
    )
}