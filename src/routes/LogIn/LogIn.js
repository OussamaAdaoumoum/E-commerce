import SignIn from '../../components/SignIn-Form/SignIn.component'
import VintageFashion from "../../components/words/Vintage_Fashion/Vintage_Fashion.component";

function LogIn(){


    return(
        <>
                
            <div className="w-full flex flex-col">
            < VintageFashion />
            < SignIn />
            </div>
        
        </>


    );
}

export default LogIn;