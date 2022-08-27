import SignUp from '../../components/SignUp-Form/SignUp.component';
import Layout from "../../components/Layout/Layout";
import VintageFashion from "../../components/words/Vintage_Fashion/Vintage_Fashion.component";

function Register(){


    return(
        <>
                
        <Layout>
            <div className="w-full flex flex-col">
            < VintageFashion />
            < SignUp />
            </div>
        </Layout>
        
        </>


    );
}

export default Register;