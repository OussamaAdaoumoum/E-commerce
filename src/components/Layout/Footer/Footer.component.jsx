import { Link } from "react-router-dom";
import Home from "../../Google-Maps/Google-Maps.component";

function Footer(){

    return(
        <>
        <footer className="px-4 lg:px-6 py-2.5 gap-y-10 block">
            <div className="flex flex-wrap flex-col ">


            <div className=" flex flex-wrap flex-row place-content-around  mx-auto w-full py-7">
                <div className="flex flex-wrap flex-col items-center">
                    <h2 className="font-Hatolie text-redlight-100 text-5xl">PHONE NUMBER</h2>
                    <p  className="font-Stevens text-black dark:text-white">+212 637 03 42 06</p>
                </div>
                <div className="flex flex-wrap flex-col items-center" >
                    <h2 className="font-Hatolie text-redlight-100 text-5xl">SEND A MAIL</h2>
                    <p className="font-Stevens text-black dark:text-white">oussamaadm755@gmail.com</p>
                </div>
            </div>

            <div className="flex flex-wrap place-content-around  mx-auto  w-full font-Collingar pb-8">
                <div>
                    <h2 className="font-Hatolie text-redlight-100 text-5xl">MOROCCO VINTAGE</h2>
                    <p className="w-60 text-center text-black dark:text-white">VinWall is a luxury vintage fashion ecommerce application, web application, buy clothes, progressive application</p>
                </div>
                <div>
                    <h2 className="font-Hatolie text-redlight-100 text-5xl">OUR PAGES</h2>
                    <ul>
                        <li>
                        <Link className="transition duration-200 hover:text-redlight-100 text-black dark:text-white" to="/" >Home</Link>
                        </li>
                        <li>
                        <Link className="transition duration-200 hover:text-redlight-100 text-black dark:text-white" to="/" >Shop</Link>
                        </li>
                        <li>
                        <Link className="transition duration-200 hover:text-redlight-100 text-black dark:text-white" to="/Mens" >Mens</Link>
                        </li>
                        <li>
                        <Link className="transition duration-200 hover:text-redlight-100 text-black dark:text-white" to="/Womens" >Womens</Link>
                        </li>
                        <li>
                        <Link className="transition duration-200 hover:text-redlight-100 text-black dark:text-white " to="/Shoes" >Shoes</Link>
                        </li>
                        <li>
                        <Link className="transition duration-200 hover:text-redlight-100 text-black dark:text-white" to="/Bags" >Bags</Link>
                        </li>
                    </ul>
                </div>
                <div className=" flex flex-wrap flex-col items-center">
                    <h2 className="font-Hatolie text-redlight-100 text-5xl">LOCALISATION</h2>
                    <Home />
                </div>
            </div>

            <div className="flex flex-wrap justify-center ">
                <p className="block font-Stevens text-black dark:text-white">All rights reserved Morrocan vintage 2022</p>
            </div>

            </div>
        </footer>

        </>
    )
}

export default Footer;