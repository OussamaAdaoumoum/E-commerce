import Logo from '../../assets/carditem.jpg';
import Logo1 from '../../assets/carditemHover.jpg';
import Logo2 from '../../assets/shoes.jpg';

function InfinitSlider() {
  return (
    <>
    {/* <div className='flex flex-row justify-center  w-screen'> */}

      <div className="flex w-[calc(208px * 20)] animate-slidein overflow-hiden  hover:z-10 absolute hover:pause m-auto h-64 ">
        <img src={Logo} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo1} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/>
        <img src={Logo2} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/>
        <img src={Logo1} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo2} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo1} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo2} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 

        <img src={Logo1} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo2} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo1} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo2} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo1} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo2} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
        <img src={Logo1} alt="hoverImage" className=" w-52 h-64 block hover:scale-125  "/> 
      </div>

      <div className="flex w-[calc(208px * 20)] animate-slideout overflow-hiden  p-64 hover:z-10 absolute hover:pause m-auto h-64">
        <img src={Logo} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo1} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/>
        <img src={Logo2} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/>
        <img src={Logo1} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo2} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo1} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo2} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 

        <img src={Logo1} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo2} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo1} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo2} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo1} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo2} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
        <img src={Logo1} alt="hoverImage" className="w-52 h-64 block hover:scale-125 "/> 
      {/* </div> */}
</div>
    </>
  );
}

export default InfinitSlider;
