// import React from 'react';

// const SideText: React.FC = () => {
//   return (
//     <div className="col-md-4">
//       <div className="absolute bottom-0 bg-lime-400  flex-1  ">
//         <div className="text-2xl text-black font-bold italic">
//           Wake up. Work out. Look hot. Kick ass. Wake up. Work out. Look hot.
//           Kick ass. Wake up. Work out. Look hot. Kick ass. Wake up. Work out.
//           Look hot. Kick ass. Wake up. Work out. Look hot. Kick ass.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideText;

import React from "react";
import "../App.css";

const SideText: React.FC = () => {
    return (
        <div>
            <div className="absolute  overflow-hidden bottom-0 w-full font-bold italic text-center bg-use text-black text-xl py-2 uppercase ">
                <div className="whitespace-nowrap animate-marquee">
                    <span>
                        * Wake up. Work out. Look hot. Kick ass. * Wake up. Work out. Look hot. Kick ass. * Wake up. Work out. Look hot.
                        Kick ass. * Wake up. Work out. Look hot. Kick ass. * Wake up. Work out. Look hot. Kick ass. * Wake up. Work out.
                        Look hot. Kick ass. * Wake up. Work out. Look hot. Kick ass. * Wake up. Work out. Look hot. Kick ass.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SideText;