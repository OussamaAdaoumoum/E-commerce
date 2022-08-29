import React from "react";
import ReactDom from "react-dom";

export default function Modal({ open, children }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
    <div className="absolute h-screen w-screen backdrop-blur-sm top-0 bottom-0 left-0 right-0 "></div>
      <div className="absolute w-full flex justify-center items-center top-0 bottom-0 left-0 right-0 p-[50px] z-50 ">
        
        <div>{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

// export default function Modal({ open, children }) {
//     if (!open) return null
//     return ReactDom.createPortal(
//     <>
//     <div className='z-60 absolute top-0 bottom-0 left-0 right-0'>
//         <div className=' '>   {/* bg-blur-0 sm:bg-blur-30 ... */}
//             {children}
//         </div>
//     </div>
//     </>,
//         document.getElementById('portal')
//     )
// }
