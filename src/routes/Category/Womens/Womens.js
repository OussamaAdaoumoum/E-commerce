import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/Product-card/Product-Card.component"
import OneWord from '../../../components/words/OneWord/OneWord';


function Shoes(){
    const [items, setItems] = useState(null);

    const fetchData = async () => {
        await fetch("http://localhost:3000/Shoes")
        .then((response) => response.json())
        .then((data) => setItems(data))
         .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchData();
    }, []);



    return(
        <>
                {items && 
            <div className="w-full flex flex-col">

            
            < OneWord Word="Womens" size="text-4xl"/>

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

export default Shoes;