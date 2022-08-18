import Logo from '../../assets/carditem.jpg';
import Logo1 from '../../assets/carditemHover.jpg';
import Logo2 from '../../assets/shoes.jpg';

function InfinitSlider() {
  return (
    <>
    <div className='flex flex-row justify-center  w-screen'>

      <div className="flex w-[calc(208px * 20)] animate-slidein overflow-hiden   absolute hover:pause m-auto h-64 ">
        <img src={Logo} alt="hoverImage" className="1 w-52 h-64 block "/> 
        <img src={Logo1} alt="hoverImage" className="2 w-52 h-64 block "/>
        <img src={Logo2} alt="hoverImage" className="3 w-52 h-64 block "/> 
        <img src={Logo} alt="hoverImage" className="4 w-52 h-64 block "/>
        <img src={Logo1} alt="hoverImage" className="5 w-52 h-64 block "/> 
        <img src={Logo2} alt="hoverImage" className="6 w-52 h-64 block "/> 
        <img src={Logo} alt="hoverImage" className="7 w-52 h-64 block "/> 
        <img src={Logo1} alt="hoverImage" className="8 w-52 h-64 block "/> 
        <img src={Logo2} alt="hoverImage" className="9 w-52 h-64 block "/> 
        <img src={Logo} alt="hoverImage" className="10 w-52 h-64 block "/> 

        <img src={Logo1} alt="hoverImage" className="11 w-52 h-64 block "/> 
        <img src={Logo2} alt="hoverImage" className="12 w-52 h-64 block "/> 
        <img src={Logo} alt="hoverImage" className="13 w-52 h-64 block "/> 
        <img src={Logo1} alt="hoverImage" className="14 w-52 h-64 block "/> 
        <img src={Logo2} alt="hoverImage" className="15 w-52 h-64 block "/> 
        <img src={Logo} alt="hoverImage" className="16 w-52 h-64 block "/> 
        <img src={Logo1} alt="hoverImage" className="17 w-52 h-64 block "/> 
        <img src={Logo2} alt="hoverImage" className="18 w-52 h-64 block "/> 
        <img src={Logo} alt="hoverImage" className="19 w-52 h-64 block "/> 
        <img src={Logo1} alt="hoverImage" className="20 w-52 h-64 block "/> 
      </div>

      <div className="flex w-[calc(208px * 20)] animate-slideout overflow-hiden  p-64 absolute hover:pause m-auto h-64">
        <img src={Logo} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo1} alt="hoverImage" className="w-52 h-64 block "/>
        <img src={Logo2} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo} alt="hoverImage" className="w-52 h-64 block "/>
        <img src={Logo1} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo2} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo1} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo2} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo} alt="hoverImage" className="w-52 h-64 block "/> 

        <img src={Logo1} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo2} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo1} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo2} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo1} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo2} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo} alt="hoverImage" className="w-52 h-64 block "/> 
        <img src={Logo1} alt="hoverImage" className="w-52 h-64 block "/> 
      </div>


</div>

    </>
  );
}

export default InfinitSlider;
