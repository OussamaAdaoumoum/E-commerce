import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

import firebase from "firebase/compat/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
  doc,
  increment,
  updateDoc,
} from "firebase/firestore";

import { useState, useEffect } from "react";


function ItemView({ handleModal, card }) {
  const [user, setUser] = useState(null);
  console.log("card data ", card);


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      // console.log("rah kheddama ", user);
    });
  }, []);

  // Get ID

  const addToCard = async () => {
    //     const col = collection(getFirestore(), "items");
    //     const o = getDocs(col);

    const currentUser = doc(getFirestore(), "users", user.uid);
    const getUserCart = collection(currentUser, "cart");
    const q = query(getUserCart);
    const querySnapshot = await getDocs(q);

    // const getCartDocs = getDocs(getUserCart);

    // window._items = querySnapshot.docs;
    // const cartItems = querySnapshot.docs.forEach((item) => item.data());
    let changed = false;
    let page = window.location.pathname;
    querySnapshot.docs.forEach((item) => {
      if (item.data().cartId === card.id) {
        updateDoc(item.ref, {
          itemsNbr: increment(1),
        });
        // item.update({
        //   itemsNbr: increment(1),
        // });
        console.log('haaaaaaaaaaaaaahwa item', item.ref);
        changed = true;
      }
    });
    if (!changed) {
      addDoc(getUserCart, {
        cartId: card.id,
        itemsNbr: 1,
        Type: page.substring(1),
      });
    }

    //   washingtonRef.update({
    //     population: firebase.firestore.FieldValue.increment(50)
    // });
  };

  return (
    <>
      <div className=" py-6 sm:py-8 lg:py-12">
        <div className="max-w-[70vw] bg-[#D9D9D9] px-4 md:px-8 mx-auto rounded-lg relative shadow-2xl">
          <div className=" grid md:grid-cols-2 gap-8">
            {/* <!-- images - start --> */}
            <div className="grid lg:grid-cols-5 gap-4">
              <div className="lg:col-span-4 bg-[#D9D9D9]  overflow-hidden relative">
                <img
                  src={card.pic1}
                  loading="lazy"
                  alt="pics not found"
                  className="w-full h-full rounded-lg object-cover object-center"
                />
              </div>

              <div className="flex lg:flex-col order-last lg:order-none gap-4">
                <div className="bg-[#D9D9D9] rounded-lg overflow-hidden">
                  <img
                    src={card.pic2}
                    loading="lazy"
                    alt="pics not found"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="bg-[#D9D9D9] rounded-lg overflow-hidden">
                  <img
                    src={card.pic3}
                    loading="lazy"
                    alt="pics not found"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="bg-[#D9D9D9] rounded-lg overflow-hidden">
                  <img
                    src={card.pic4}
                    loading="lazy"
                    alt="pics not found"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            {/* <!-- images - end --> */}

            {/* <!-- content - start --> */}
            <div className="md:py-8">
              {/* <!-- name - start --> */}
              <div className="mb-2 md:mb-3">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-Helvetica font-bold">
                  MEN'S T-SHIRT DECATUR
                </h2>
                <span className="inline-block text-gray-500 mb-0.5 font-Helvetica font-bold">
                  REFERENCE: MDEC1H22
                </span>
                <span className="block text-gray-500 mb-0.5 font-Helvetica text-xs ">
                  COMPOSITION : 100% COTTON
                </span>
              </div>
              {/* <!-- name - end --> */}

              {/* <!-- color - start --> */}
              <div className="mb-4 md:mb-6">
                <span className="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">
                  Color
                </span>

                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="w-8 h-8 bg-gray-800 border  rounded-full  hover:ring-gray-200 transition duration-100"></span>
                  <button
                    type="button"
                    className="w-8 h-8 bg-gray-500 border hover:ring-gray-200 rounded-full transition duration-100"
                  ></button>
                  <button
                    type="button"
                    className="w-8 h-8 bg-gray-200 border hover:ring-gray-200 rounded-full transition duration-100"
                  ></button>
                  <button
                    type="button"
                    className="w-8 h-8 bg-white border hover:ring-gray-200 rounded-full transition duration-100"
                  ></button>
                </div>
              </div>
              {/* <!-- color - end --> */}

              {/* <!-- size - start --> */}
              <div className="mb-8 md:mb-10">
                <span className="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">
                  Size
                </span>

                <div className="flex flex-wrap gap-3 justify-center ">
                  <button
                    type="button"
                    className="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                  >
                    XS
                  </button>
                  <button
                    type="button"
                    className="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                  >
                    S
                  </button>
                  <span className="w-12 h-8 flex justify-center items-center bg-redlight-100 text-white text-sm font-semibold text-center border border-redlight-500 rounded-md cursor-default">
                    M
                  </span>
                  <button
                    type="button"
                    className="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                  >
                    L
                  </button>
                  <span className="w-12 h-8 flex justify-center items-center bg-white text-gray-400 text-sm font-semibold text-center border border-transparent rounded-md cursor-not-allowed">
                    XL
                  </span>
                </div>
              </div>
              {/* <!-- size - end --> */}

              {/* <!-- price - start --> */}
              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-gray-800 text-xl md:text-2xl font-bold">
                    $15.00
                  </span>
                  <span className="text-redlight-200 line-through mb-0.5">
                    $30.00
                  </span>
                </div>

                <span className="text-gray-500 text-sm">
                  incl. VAT plus shipping
                </span>
              </div>
              {/* <!-- price - end --> */}

              {/* <!-- shipping notice - start --> */}
              <div className="flex items-center text-gray-500 gap-2 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>

                <span className="text-sm">2-4 day shipping</span>
              </div>
              {/* <!-- shipping notice - end --> */}

              {/* <!-- buttons - start --> */}
              <div className="flex gap-2.5 justify-center">
                <button
                  onClick={addToCard}
                  className="inline-block flex-1 sm:flex-none bg-redlight-100 hover:bg-redlight-200 active:bg-redlight-500 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Add to cart
                </button>

                <Link
                  to="/"
                  className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Buy now
                </Link>
              </div>
              {/* <!-- buttons - end --> */}
            </div>
            {/* <!-- content - end --> */}
          </div>
          <div
            className="transition duration-700 absolute top-2 right-2 rounded-full bg-gray-200 hover:bg-gray-500 p-1 "
            onClick={handleModal}
          >
            {" "}
            <GrClose />
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemView;
