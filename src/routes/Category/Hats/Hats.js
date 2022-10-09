import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/Product-card/Product-Card.component"
import OneWord from '../../../components/words/OneWord/OneWord';

import firebase from "firebase/compat/app";
import {
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";

function Hats(){
    const [items, setItems] = useState(null);

    const fetchData = async () => {
        await fetch("http://localhost:3000/Hats")
          .then((response) => response.json())
          .then(async (data) => {
        //    const col = collection(getFirestore(), "items");
       //     const o = getDocs(col);
          
              data.forEach((el) => {
                const d = doc(getFirestore(), "Hats", "" + el.id);
                setDoc(d, el);
              });
            
            return setItems(data);
          })
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    


    return(
        <>
                {items && 
            <div className="w-full flex flex-col">

            
            < OneWord Word="Bags" size="text-4xl"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
            {items.map((item) => (
                
                    <ProductCard card={item} key={item.id}/>
            )
            )
            }
            </div>
            </div>
        }
        </>


    );
}

export default Hats;