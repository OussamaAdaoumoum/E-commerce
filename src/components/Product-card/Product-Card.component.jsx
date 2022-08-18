import { Link } from "react-router-dom";
import logo from "../../assets/carditem.jpg";
import hoverImage from "../../assets/carditemHover.jpg";

function ProductCard(categorie){

    return(
        <>
            <div className="flex flex-wrap flex-col font-Collingar center content-center justify-center h-screen items-center">
                <div className="group relative">
                    <img  className="w-298 h-452 group-hover:opacity-0 duration-300 rounded-lg" src={logo} alt="product card"/>
                    <img className="opacity-0 group-hover:opacity-60 duration-700 w-298 h-452 absolute inset-x-0 bottom-0 flex justify-center rounded-lg"    src={hoverImage} alt="hoverImage" />
                    <div className="absolute top-0 left-0 w-298 h-452 flex flex-col justify-center items-center opacity-0  group-hover:opacity-100 duration-500">
                    {/* <Link class="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" to="/popUP" >Continue Shopping</Link> */}
                        <Link className="absolute transition duration-500 text-redlight-100  hover:bg-redlight-200 rounded-lg text-sm px-3 lg:px-4.75 py-1 lg:py-1 mr-0.5 hover:text-white dark:hover:text-white dark:hover:bg-redlight-200 focus:outline-none" to="/" >Product</Link>
                    </div> 
                </div>
                <div className="flex flex-wrap flex-col font-Collingar items-center pt-2.5">
                    <h2 className="text-Collingar ">MEN'S T-SHIRT BYSAPICK</h2>
                    <p>50.00 $</p>
                </div>
            </div>
        </>
    );
}

export default ProductCard;