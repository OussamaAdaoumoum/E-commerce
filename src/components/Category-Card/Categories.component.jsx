import CategoryCard from './Category-Card.component';
import React, { useEffect, useState } from "react";



function Categories() {
  const [items, setItems] = useState(null);

  const fetchData = async () => {
    await fetch("http://localhost:3000/Category")
    .then((response) => response.json())
    .then((data) => setItems(data))
     .catch((error) => console.log(error));
};
        // <div className='relative w-full border-8 border-t-redlight-100 border-b-redlight-100 p-14 my-16'>

useEffect(() => {
    fetchData();
}, []);

    return (
      <>
      {items && 
      
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full border-8 border-t-redlight-100 border-b-redlight-100 p-14 my-16">
      {items.map((item) => (
          
              <CategoryCard Category={item} key={item.id}/>
      )
      )
      }
      </div>
      }


      </>

    );
  }
  
  export default Categories;
  