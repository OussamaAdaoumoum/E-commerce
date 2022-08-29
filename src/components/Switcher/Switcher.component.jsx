import React, {useState} from 'react';
import useDarkSide from '../Hook/useDarkSide';
import {DarkModeSwitch} from 'react-toggle-dark-mode';


export default function Switcher(){
    const [colorTheme, setColorTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

    const toggleDarkMode = (checked) => {
        setColorTheme(colorTheme);
        setDarkSide(checked);
    };
    return(
        <div className=' flex flex-col items-center '>
            <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={20} className="transition duration-500"/>
            {/* <p>dotfezgyxudz</p>
            <h3 className='text-gray-800 dark:text-redlight-100 pt-4'>{colorTheme === 'light' ? "dark Mode" : "light Mode"}</h3> */}
        </div>
    )
}

