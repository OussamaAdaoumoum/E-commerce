import { Link } from "react-router-dom";
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
  const [user, setUser] = useState(null);

  //       //GETTINGS LISTS
  //   const [lists, setLists] = useState([])
  //   useEffect(()=> {
  //     const q = query(collection(db, "shopping-lists"),  orderBy("timestamp", "desc"));

  //     const unsubscribe = onSnapshot(q, (snapshot) => {
  //       setLists(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
  //       setInput("")
  //     });
  //       return () => unsubscribe()
  //  }, [])
  // //ENDS HERE

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      console.log("rah kheddama ", user);
    });
  }, []);

  // Get ID
  const getId = async () => {
    const currentUser = doc(getFirestore(), "users", user.uid);
    const getUserCart = collection(currentUser, "cart");
    const q = query(getUserCart);
    const querySnapshot = await getDocs(q);

    // const getCartDocs = getDocs(getUserCart);
    console.log("haahya", querySnapshot.docs);

    window._items = querySnapshot.docs;
    const cartItems = querySnapshot.docs.map((item) => item.data());

    cartItems.forEach(async (item) => {
      const Item = doc(getFirestore(), "items", "" + item.cartId);
      const docSnap = await getDoc(Item);
      item.details = docSnap.data();

      console.log(item);
    });
  };
  return (
    <>
      <div className="flex flex-wrap w-full justify-around text-black">
        <div className="flex flex-wrap w-9/12 items-center justify-around border-4 border-double border-t-redlight-200">
          <img src={logo} alt="StockImage" className="w-298 h-452 rounded-lg" />
          <div className="flex flex-wrap flex-col place-self-start">
            <div className="flex flex-wrap place-items-start font-Collingar flex-col ">
              <h1 className="text-3xl text-redlight-100 ">
                MEN'S T-SHIRT BYSAPICK
              </h1>
              <p className="text-l">REFERENCE: MDEC1H22</p>
              <p className="text-2xs">COMPOSITION : 100% COTTON</p>
            </div>
            <div className="flex flex-wrap items-center flex-col font-Helvetica-bold">
              <h1 className="text-2xl">50.00 $</h1>
              <h2>
                <span>{"<"} </span> 1 <span>{">"}</span>
              </h2>
              <button
                className=" transition duration-500 text-redlight-100  bg-redlight-200 rounded-lg text-sm px-3 lg:px-4.75 py-1 lg:py-1 mr-0.5 hover:text-white dark:hover:text-white hover:bg-redlight-200 focus:outline-none"
                onClick={getId}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemStock;
