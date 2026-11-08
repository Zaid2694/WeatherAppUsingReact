import React from "react";
import Loader from "./Loader";

export default function Result(props) {
    const { weatherData: data } = props;

    let shownOnPage;

    if (data == null || data === "null") {
        if (props.isSearched === true) {


            shownOnPage = <Loader />;
        }
        else {
            shownOnPage = (
                <div className="container" >
                    <h1 className="text-center mt-2">Please a search a city!</h1>
                </div>
            );
        }

    } else {
        shownOnPage = (
            <div>
                <div className="row">
                    <div className="col">
                        <div className="card border-primary">
                            <div className="card-body">
                                <h4 className="card-title">
                                    {/* Icon ka URL theek kiya hai */}
                                    <img
                                        src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
                                        alt="weather icon"
                                        style={{ width: "50px", height: "50px" }} // Size fix kiya
                                    />
                                    {/* Direct temp use karein, kToC hata dein */}
                                    {data.name} ({data?.main?.temp} °C)
                                    <span className="pl-2 text-capitalize">
                                        {data?.weather?.[0]?.description}
                                    </span>
                                </h4>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th>Feels like</th>
                                                        <td>{data?.main?.feels_like} °C</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Min Temp.</th>
                                                        <td>{data?.main?.temp_min} °C</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Max Temp.</th>
                                                        <td>{data?.main?.temp_max} °C</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Sun Rise</th>
                                                        <td>
                                                            {data?.sys?.sunrise
                                                                ? new Date(data.sys.sunrise * 1000).toLocaleTimeString()
                                                                : "N/A"}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Sun Set</th>
                                                        <td>
                                                            {data?.sys?.sunset
                                                                ? new Date(data.sys.sunset * 1000).toLocaleTimeString()
                                                                : "N/A"}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <>{shownOnPage}</>;
}
// import React from "react";
// import Loader from "./Loader"; // Ensure karein ke Loader.js mojood hai

// export default function Result(props) {
//     const { weatherData: data } = props;

//     // Temperature Kelvin se Celsius mein convert karne ke liye
//     function kToC(k) {
//         return k - 273.15;
//     }

//     let shownOnPage;

//     // Agar data nahi hai (null ya string "null"), toh Loader dikhayein
//     if (data == null || data === "null") {
//         shownOnPage = <Loader />;
//     } else {
//         shownOnPage = (
//             <div>
//                 <div className="row">
//                     <div className="col">
//                         <div className="card border-primary">
//                             <div className="card-body">
//                                 <h4 className="card-title">
//                                     <img
//                                         src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
//                                         alt="weather icon"
//                                     />
//                                     {data.name} ({kToC(data?.main?.temp).toFixed(2)} °C)
//                                     <span className="pl-2 text-capitalize">
//                                         {data?.weather?.[0]?.description}
//                                     </span>
//                                 </h4>
//                                 <div className="row">
//                                     <div className="col">
//                                         <div className="row">
//                                             <table className="table">
//                                                 <tbody>
//                                                     {/* Row 1: Feels Like */}
//                                                     <tr>
//                                                         <th>Feels like</th>
//                                                         <td>{kToC(data?.main?.feels_like).toFixed(2)} °C</td>
//                                                     </tr>

//                                                     {/* Row 2: Min Temp */}
//                                                     <tr>
//                                                         <th>Min Temp.</th>
//                                                         <td>{kToC(data?.main?.temp_min).toFixed(2)} °C</td>
//                                                     </tr>

//                                                     {/* Row 3: Max Temp */}
//                                                     <tr>
//                                                         <th>Max Temp.</th>
//                                                         <td>{kToC(data?.main?.temp_max).toFixed(2)} °C</td>
//                                                     </tr>

//                                                     {/* Row 4: Sun Rise */}
//                                                     <tr>
//                                                         <th>Sun Rise</th>
//                                                         <td>
//                                                             {data?.sys?.sunrise
//                                                                 ? new Date(data.sys.sunrise * 1000).toLocaleTimeString()
//                                                                 : "N/A"}
//                                                         </td>
//                                                     </tr>

//                                                     {/* Row 5: Sun Set */}
//                                                     <tr>
//                                                         <th>Sun Set</th>
//                                                         <td>
//                                                             {data?.sys?.sunset
//                                                                 ? new Date(data.sys.sunset * 1000).toLocaleTimeString()
//                                                                 : "N/A"}
//                                                         </td>
//                                                     </tr>
//                                                 </tbody>
//                                             </table>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return <>{shownOnPage}</>;
// }























// // import React from "react";
// // import Loader from "./Loader";

// // export default function Result(props) {
// //     const { weatherData: data } = props;
// //     function kToC(k) {
// //         return k - 273.15;
// //     }
// //     function getTheDate(stamp) {
// //         const date = new Date(stamp * 1000);
// //         return data.toLocaleTimeString();
// //     }
// //     let shownOnPage;
// //     if (data == null) {
// //         shownOnPage = <Loader />;
// //     }
// //     else {
// //         shownOnPage = <div>
// //             <div className="row">
// //                 <div className="col">
// //                     <div className="card border-primary">
// //                         <div className="card-body">
// //                             <h4 className="card-title">
// //                                 <img
// //                                     src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
// //                                     alt="weather icon"
// //                                 />
// //                                 {data.name}
// //                                 ({kToC(data?.main?.temp).toFixed(2)} °C)                                <span className="pl-2">{data?.weather?.[0]?.description}</span>
// //                             </h4>
// //                             <div className="row">
// //                                 <div className="col">
// //                                     <div className="row">
// //                                         <table className="table">
// //                                             <tbody>
// //                                                 {/* Row 1: Feels Like */}
// //                                                 <tr>
// //                                                     <th>Feels like</th>
// //                                                     <td>{kToC(data?.main?.feels_like).toFixed(2)} °C</td>
// //                                                 </tr>

// //                                                 {/* Row 2: Min Temp */}
// //                                                 <tr>
// //                                                     <th>Min Temp.</th>
// //                                                     <td>{kToC(data?.main?.temp_min).toFixed(2)} °C</td>
// //                                                 </tr>

// //                                                 {/* Row 3: Max Temp */}
// //                                                 <tr>
// //                                                     <th>Max Temp.</th>
// //                                                     <td>{kToC(data?.main?.temp_max).toFixed(2)} °C</td>
// //                                                 </tr>

// //                                                 {/* Row 4: Sun Rise */}
// //                                                 <tr>
// //                                                     <th>Sun Rise</th>
// //                                                     <td>{new Date(data?.sys?.sunrise * 1000).toLocaleTimeString()}</td>
// //                                                 </tr>

// //                                                 {/* Row 5: Sun Set */}
// //                                                 <tr>
// //                                                     <th>Sun Set</th>
// //                                                     <td>{new Date(data?.sys?.sunset * 1000).toLocaleTimeString()}</td>
// //                                                 </tr>
// //                                             </tbody>
// //                                         </table>

// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     }

// //     return (
// //         <>
// //             {shownOnPage}
// //         </>
// //     );

// // }