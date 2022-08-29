import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../../Modal";
import ItemView from "../Item-View/Item-View.component";

function ProductCard({card}){
    const [isOpen, setIsOpen] = useState(false);
    const handleModal = () =>{
        setIsOpen(!isOpen)
    }
    return(

        <>

            <div className="flex flex-wrap flex-col font-Collingar content-center justify-center items-center p-12 " >
                <div className="group relative shadow-2xl hover:shadow-[#1c0000] rounded-lg">
                    <img  className="w-298 h-452 group-hover:opacity-0 duration-300 rounded-lg text-white dark:text-white" src={card.pic1} alt="product card"/>
                    <img className="opacity-0 group-hover:opacity-60 duration-700 w-298 h-452 absolute inset-x-0 bottom-0 flex justify-center rounded-lg"    src={card.pic2} alt="hoverImage" />
                    <div className="absolute top-0 left-0 w-298 h-452 flex flex-col justify-center items-center opacity-0  group-hover:opacity-100 duration-500">
                    {/* <Link class="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" to="/popUP" >Continue Shopping</Link> */}
                        <button className="absolute transition duration-500 text-redlight-100  hover:bg-redlight-200 rounded-lg text-sm px-3 lg:px-4.75 py-1 lg:py-1 mr-0.5 hover:text-white dark:hover:text-white dark:hover:bg-redlight-200 focus:outline-none"  
                        onClick={() => setIsOpen(true)} >Product</button>
                        <Modal open={isOpen}>
                        <ItemView handleModal={handleModal} card={card}/>
                            </Modal>

                    </div> 
                </div>
                <div className="flex flex-wrap flex-col font-Collingar items-center pt-2.5">
                    <h2 className="text-Collingar text-center dark:text-[#FFF] text-[#0e0000] font-bold">{card.Name}</h2>
                    <p className=" dark:text-[#FFF] text-[#0e0000] font-bold">{card.price} $</p>
                </div>
            </div>

        </>
    );
}

export default ProductCard;

