// import React from 'react'
// import LoaderCss from '../Assets/Loader.css'

// export default function Loader() {
//     return (
//         <div id="preloader" >
//             < div id="loader"></div>
//         </div>
//     )
// }
import React from 'react';
import '../Assets/Loader.css';

export default function Loader() {
    return (
        <div className="loader-wrapper">
            <div id="loader"></div>
        </div>
    );
}