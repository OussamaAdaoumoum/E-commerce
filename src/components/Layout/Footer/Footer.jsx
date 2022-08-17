import { Link } from "react-router-dom";

import Home from "../../Google-Maps/Google-Maps.component";
function Footer(){

    return(
        <>
        <footer className="px-4 lg:px-6 py-2.5 flex-col gap-y-10">
            {/* <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl font-Collingar content-evenly "> */}
            <div className=" flex flex-wrap place-content-around  mx-auto max-w-screen-xl font-Collingar">
                <div className="flex flex-wrap flex-col items-center">
                    <h2 className="font-Hatolie text-redlight-100 text-5xl">PHONE NUMBER</h2>
                    <p  className="font-Stevens text-black">+212 637 03 42 06</p>
                </div>
                <div className="flex flex-wrap flex-col items-center" >
                    <h2 className="font-Hatolie text-redlight-100 text-5xl">SEND A MAIL</h2>
                    <p className="font-Stevens text-black">oussamaadm755@gmail.com</p>
                </div>
            </div>
            <div className="flex flex-wrap place-content-around  mx-auto max-w-screen-xl font-Collingar ">
                <div>
                    <h2 className="font-Hatolie text-redlight-100 text-5xl">MOROCCO VINTAGE</h2>
                    <p className="w-60 text-center ">VinWall is a luxury vintage fashion ecommerce application, web application, buy clothes, progressive application</p>
                </div>
                <div>
                    <h2 className="font-Hatolie text-redlight-100 text-5xl">OUR PAGES</h2>
                    <ul>
                        <li>
                        <Link className="transition duration-200 hover:text-redlight-100" to="/" >Home</Link>
                        </li>
                        <li>
                        <Link className="transition duration-200 hover:text-redlight-100" to="/" >Shop</Link>
                        </li>
                        <li>
                        <Link className="transition duration-200 hover:text-redlight-100" to="/" >Men</Link>
                        </li>
                        <li>
                        <Link className="transition duration-200 hover:text-redlight-100" to="/" >Women</Link>
                        </li>
                        <li>
                        <Link className="transition duration-200 hover:text-redlight-100" to="/" >Shoes</Link>
                        </li>
                        <li>
                        <Link className="transition duration-200 hover:text-redlight-100" to="/" >Bags</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-Hatolie text-redlight-100 text-5xl">LOCALISATION</h2>
                    <Home />
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <p className="block font-Stevens">All rights reserved Morrocan vintage 2022</p>
            </div>
        </footer>
        </>

    );
}

export default Footer;
