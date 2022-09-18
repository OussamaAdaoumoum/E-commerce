import SignUp from '../../components/SignUp-Form/SignUp.component';
import VintageFashion from "../../components/words/Vintage_Fashion/Vintage_Fashion.component";

function Register(){


    return(
        <>
                
            <div className="w-full flex flex-col">
            < VintageFashion />
            < SignUp />
            </div>
        
        </>


    );
}

export default Register;