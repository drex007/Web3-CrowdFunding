import { useState, CSSProperties } from "react";
import SyncLoader from "react-spinners/SyncLoader";

// const CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };


const ButtonLoader = () => {
  return (
    <button


      className='w-full bg-gradient-to-l border-2 rounded-md border-white border-solid  px-2 py-3 text-[13px] mt-2  text-white font-spacegrotesk shadow-2xl focus:shadow-outline'>

      <SyncLoader
        color={"#ffffff"  }
        // loading={loading}
        // cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

    </button>

  )
}

export default ButtonLoader