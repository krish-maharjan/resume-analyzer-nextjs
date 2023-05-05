import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Modal({show, children}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <div className='fixed z-30 top-0 left-0 w-full h-full flex justify-center items-center bg-center bg-[#000] bg-opacity-75'>
      <div className='card bg-base-100 shadow-xl min-h-fit min-w-fit p-20 gap-4'>
        <div className='card-body'>{children}</div>
      </div>
    </div>
  ) : null;

  if(isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    )
  } else {
    return null
  }


}