

// import React, { Component } from 'react'
// import axios from 'axios';
// import Search from './Search';
// import Result from './Result';
// class Weather extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             lat: "",
//             lon: "",
//             weatherData: "null",
//             city: "",
//         }
//     }
//     changeHandler = (event) => {
//         const name = event.target.name;
//         console.log(name);
//         if (name === "lat") {
//             this.setState({ lat: event.target.value });
//         } else if (name === "lon") {
//             this.setState({ lon: event.target.value });
//         } else if (name === "city") {
//             this.setState({ city: event.target.value });
//         }
//     };
//     searchHandler = () => {
//         axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=fc20873fd94177935c05130078ecabce`)
//             .then((result) => {
//                 this.setState({
//                     weatherData: result.data,
//                     city: result.data.name,
//                 });

//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };

//     locationHandler = () => {
//         this.setState({
//             lat: "",
//             lon: "",
//             city: "",
//             weatherData: "null",

//         });
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (result) => {
//                     setTimeout(() => {
//                         // 1. Pehle state update karein aur callback mein API call karein
//                         this.setState({
//                             lat: result.coords.latitude,
//                             lon: result.coords.longitude,
//                         }, () => {


//                             // 2. Ab axios call karein (yahan ab nayi values milengi)
//                             axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=fc20873fd94177935c05130078ecabce`)
//                                 .then((result) => {
//                                     this.setState({
//                                         weatherData: result.data,
//                                         city: result.data.name,
//                                     });

//                                 })
//                                 .catch((error) => {
//                                     console.log(error);
//                                 });
//                         });
//                     }, 500);
//                 },
//                 (error) => {
//                     console.log(error);
//                 }
//             );
//         }
//         else {
//             console.log("Geolocation is not supported by this browser.");
//         }
//     };
//     render() {
//         return (
//             <div
//                 className="container pt-4 "
//                 style={{ height: "500px" }}
//             >
//                 <Search
//                     lat={this.state.lat}
//                     lon={this.state.lon}
//                     city={this.state.city}
//                     weatherData={this.state.weatherData}
//                     change={this.changeHandler}
//                     getLocation={this.locationHandler}
//                 ></Search>
//                 <Result
//                     weatherData={this.state.weatherData}
//                 ></Result>
//             </div>
//         );
//     }
// }

// export default Weather;
import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import Result from './Result';
import Recent from './Recent';
import Loader from './Loader';
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: "",
            lon: "",
            weatherData: null, // String "null" taake Result mein Loader trigger ho
            city: "",
            isSearched: false,
            recent: [],
        };
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    recentsearchHandler = (lat, lon) => {
        this.setState({ weatherData: null, isSearched: true }, () => {
            this.setState({ lat, lon }, () => {
                // console.log("State updated with recent search:", this.state.lat, this.state.lon);
                axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=fc20873fd94177935c05130078ecabce&units=metric`
                )
                    .then((result) => {
                        this.setState(
                            {
                                weatherData: result.data,
                                city: result.data.name,
                            },

                        );
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            })
        });


    }
    searchHandler = () => {
        this.setState({
            // lat: this.state.lat,
            // lon: this.state.lon,
            // city: "",
            isSearched: true,
            weatherData: null,
        });

        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=fc20873fd94177935c05130078ecabce&units=metric`
        )
            .then((result) => {
                this.setState(
                    {
                        weatherData: result.data,
                        city: result.data.name,
                    },
                    () => this.addDataToRecent() // ✅ setState ke callback mein
                );
            })
            .catch((error) => {
                console.log(error);
                this.setState({ weatherData: null });
            });

    };

    addDataToRecent = () => {
        // console.log("this.state.recent before push:", this.state.recent);

        let recent = this.state.recent;
        recent.push({
            lat: this.state.lat,
            lon: this.state.lon,
            city: this.state.city
        });
        this.setState({ recent }, () => {
            // console.log(this.state.recent);
            window.localStorage.setItem("recentSearches", JSON.stringify(this.state.recent));
        }
        );

    };
    componentDidMount() {
        const data = window.localStorage.getItem("recentSearches");
        let recent = data === null ? [] : JSON.parse(data);
        this.setState({ recent }); // Agar data null ho to empty array set karein

    }

    locationHandler = () => {
        // Location get karte waqt Loader show karein
        this.setState({
            // lat: "",
            // lon: "",
            // city: "",
            isSearched: true,
            weatherData: null,
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (result) => {
                    const currentLat = result.coords.latitude;
                    const currentLon = result.coords.longitude;

                    // Pehle lat/lon state mein save karein
                    this.setState({
                        lat: currentLat,
                        lon: currentLon,
                    });

                    // Phir API call karein (Celsius ke liye &units=metric)
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLon}&appid=fc20873fd94177935c05130078ecabce&units=metric`)
                        .then((result) => {
                            this.setState({
                                weatherData: result.data,
                                city: result.data.name,
                            });
                        }, () => this.addDataToRecent()   // ✅ setState callback mein

                        )
                        .catch((error) => {
                            console.log(error);
                            this.setState({ weatherData: null });
                        });
                },
                (error) => {
                    console.log(error);
                }
            );

        } else {
            console.log("Geolocation is not supported by this browser.");
        }

    };

    render() {
        return (
            <div className="container pt-4" style={{ minHeight: "500px" }}>
                <Recent recent={this.state.recent}
                    research={this.recentsearchHandler}
                />

                <Search
                    lat={this.state.lat}
                    lon={this.state.lon}
                    city={this.state.city}
                    change={this.changeHandler}
                    getLocation={this.locationHandler}
                    search={this.searchHandler} // 🛑 Ye line add karna zaroori thi
                    recent={this.state.recent} // Recent searches ko Search component mein bhejna
                />
                <Result isSearched={this.state.isSearched}

                    weatherData={this.state.weatherData}

                />
            </div>
        );
    }
}

export default Weather;