import { useState, useEffect } from "react";
import logo from "../../assets/pics/carditem.jpg";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  query,
  getDoc,
} from "firebase/firestore";
import firebase from "firebase/compat/app";

function ItemStock() {
  const [stock, setStock] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      
      getId(user);
    });
  }, []);

  // Get ID
  const getId = async (user) => {
    // const user = firebase.auth().currentUser;
    const currentUser = doc(getFirestore(), "users", user.uid);
    const getUserCart = collection(currentUser, "cart");
    const q = query(getUserCart);
    const querySnapshot = await getDocs(q);

    // const getCartDocs = getDocs(getUserCart);
    // console.log("haahya", querySnapshot.docs);

    const cartItems = querySnapshot.docs.map((item) => item.data());
    for (const item of cartItems) {
      // cartItems.forEach(async (item) => {
      const Item = doc(getFirestore(), item.Type, "" + item.cartId);
      const docSnap = await getDoc(Item);
      item.details = docSnap.data();
      //   console.log("ha ach katkhrrej", item);
    }
    setStock(cartItems);
    console.log("cart item dialna", cartItems);
  };

  return (
    <>
      {stock &&
        stock.map((item) => {
          return (
            <div
              className="flex flex-wrap w-full justify-around text-black py-8"
              key={item.cartId}
            >
              <div className="flex flex-wrap w-9/12 items-center justify-around ">
                <img
                  src={item.details.pic1}
                  alt="StockImage"
                  className="w-298 h-452 rounded-lg"
                />
                <div className="flex flex-wrap flex-col place-self-start">
                  <div className="flex flex-wrap place-items-start font-Collingar flex-col ">
                    <h1 className="text-3xl text-redlight-100 ">
                      MEN'S T-SHIRT BYSAPICK
                    </h1>
                    <p className="text-l dark:text-white text-gray-900">REFERENCE: MDEC1H22</p>
                    <p className="text-2xs  dark:text-white text-gray-900">COMPOSITION : 100% COTTON</p>
                  </div>
                  <div className="flex flex-wrap items-center flex-col font-Helvetica-bold pt-16">
                    <h1 className="text-2xl text-white dark:text-redlight-100 ">50.00 $</h1>
                    <h2 className="py-5">
                      <span>{"<"} </span> 1 <span>{">"}</span>
                    </h2>
                    <button className=" transition duration-500 dark:text-white text-gray-900  bg-redlight-200 rounded-lg text-sm px-3 lg:px-4.75 py-1 lg:py-1 mr-0.5 dark:hover:text-white hover:text-gray-900 hover:bg-redlight-200 focus:outline-none">
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }
    </>
  );
}

export default ItemStock;
