import { Link } from "react-router-dom";
import { ReactComponent as YourSvg } from '../../../assets/Loop.svg';

function NavBar(){



    return(
        <>
        <nav className=" px-4 lg:px-6 py-2.5 ">
            <div className="flex flex-wrap justify-between items-center  mx-auto max-w-screen-xl font-Collingar">
                <Link  to="/" >
                    <YourSvg className="mr-3 h-6 sm:h-9" alt="Logo" />
                </Link>

                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 " id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0  ">
                        <li>
                            <Link className="block transition duration-500 text-redlight-100  hover:bg-redlight-200 rounded-lg text-sm px-3 lg:px-4.75 py-1 lg:py-1 mr-0.5 hover:text-white dark:hover:text-white dark:hover:bg-redlight-200 focus:outline-none" aria-current="page" to="/" >Home</Link>
                        </li>
                        <li>
                            <Link className="block transition duration-500 text-redlight-100  hover:bg-redlight-200 rounded-lg text-sm px-3 lg:px-4.75 py-1 lg:py-1 mr-0.5 hover:text-white dark:hover:text-white dark:hover:bg-redlight-200 focus:outline-none" to="/" >Company</Link>
                        </li>
                        <li>
                            <Link className="block transition duration-500 text-redlight-100  hover:bg-redlight-200 rounded-lg text-sm px-3 lg:px-4.75 py-1 lg:py-1 mr-0.5 hover:text-white dark:hover:text-white dark:hover:bg-redlight-200 focus:outline-none " to="/" >Marketplace</Link>
                        </li>
                        <li>
                            <Link  className="block transition duration-500 text-redlight-100  hover:bg-redlight-200 rounded-lg text-sm px-3 lg:px-4.75 py-1 lg:py-1 mr-0.5 hover:text-white dark:hover:text-white dark:hover:bg-redlight-200 focus:outline-none" to="/" >Features</Link>
                        </li>
                        <li>
                            <Link className="block transition duration-500 text-redlight-100  hover:bg-redlight-200 rounded-lg text-sm px-3 lg:px-4.75 py-1 lg:py-1 mr-0.5 hover:text-white dark:hover:text-white dark:hover:bg-redlight-200 focus:outline-none" to="/" >Team</Link>
                        </li>
                        <li>
                            <Link className="block transition duration-500 text-redlight-100  hover:bg-redlight-200 rounded-lg text-sm px-3 lg:px-4.75 py-1 lg:py-1 mr-0.5 hover:text-white dark:hover:text-white dark:hover:bg-redlight-200 focus:outline-none" to="/" >Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center lg:order-2">
                    <Link className="transition duration-500 text-redlight-100 dark:text-redlight-100 hover:bg-redlight-100 hover:text-white rounded-lg text-sm px-3 lg:px-4.75 py-1 lg:py-1.25 mr-2 dark:hover:bg-redlight-200 focus:outline-none " to="/LogIn">Log in</Link>
                    <Link className="transition duration-500 text-white bg-redlight-100 hover:bg-redlight-200 rounded-lg text-sm px-3 lg:px-4.75 py-1 lg:py-1.25 mr-2 dark:bg-redlight-100 dark:hover:bg-redlight-200 focus:outline-none " to="/SignUp">Register</Link>
                    {/* <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button> */}
                </div>
            </div>
        </nav>
        </>
    );
}


export default NavBar;