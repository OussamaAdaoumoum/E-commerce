import { Link } from "react-router-dom";
import logo from "../../assets/carditem.jpg";


function CategoryCard(){

    return(
        <>
        <div className='category-container' >
            <div className="flex flex-wrap flex-col font-Hatolie center content-center justify-center h-screen items-center">
                <div className="group relative">
                    <img  className="w-298 h-452 group-hover:opacity-70 duration-300 rounded-lg" src={logo} alt="product card"/>
                    <div className="absolute top-0 left-0 w-298 h-452 flex flex-col justify-center items-center opacity-0  group-hover:opacity-100 duration-500">
                    {/* <Link class="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" to="/popUP" >Continue Shopping</Link> */}
                        <Link className="absolute transition duration-500 text-redlight-100 rounded-lg  px-3 lg:px-4.75 py-1 lg:py-1 mr-0.5 hover:text-black dark:hover:text-black  focus:outline-none text-5xl" to="/" >WOMEN</Link>
                    </div> 
                </div>

        </div>
        </div>
        </>
    );
}

export default CategoryCard;