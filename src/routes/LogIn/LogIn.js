import React, { useEffect, useState } from "react";
import SignIn from '../../components/SignIn-Form/SignIn.component'
import Layout from "../../components/Layout/Layout";
import VintageFashion from "../../components/words/Vintage_Fashion/Vintage_Fashion.component";

function LogIn(){


    return(
        <>
                
        <Layout>
            <div className="w-full flex flex-col">
            < VintageFashion />
            < SignIn />
            </div>
        </Layout>
        
        </>


    );
}

export default LogIn;