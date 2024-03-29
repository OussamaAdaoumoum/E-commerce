import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/Product-card/Product-Card.component";
import OneWord from "../../../components/words/OneWord/OneWord";

import firebase from "firebase/compat/app";
import {
  getFirestore,
  collection,
  addDoc,
  where,
  query,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";

function Mens() {
  const [items, setItems] = useState(null);

  const fetchData = async () => {
    await fetch("http://localhost:3000/Mens")
      .then((response) => response.json())
      .then(async (data) => {
    //    const col = collection(getFirestore(), "items");
   //     const o = getDocs(col);
      
          data.forEach((el) => {
            const d = doc(getFirestore(), "Mens", "" + el.id);
            setDoc(d, el);
          });
        
        return setItems(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {items && (
          <div className="w-full flex flex-col">
            <OneWord Word="MENS" size="text-4xl"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
              {items.map((item) => (
                <ProductCard card={item} key={item.id} />
              ))}
            </div>
          </div>
      )}
    </>
  );
}

export default Mens;
