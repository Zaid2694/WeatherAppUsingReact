import React from 'react'

export default function Search(props) {
    return (
        <div className="row">


            <div className="col-lg-5">
                <div className="form-group mb-3">
                    <label htmlFor="city" className="form-label fw-bold">Type City Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="city"
                        id="city"
                        value={props.city}
                        onChange={props.change}

                        aria-describedby="helpId"
                        placeholder="Enter city name"
                    />
                </div>
            </div>

            <div className="col-lg-2 text-center d-flex align-items-center justify-content-center">
                <h5 className="text-muted m-0">OR</h5>
            </div>

            <div className="col-lg-5">
                <div className="form-group mb-3">
                    <label htmlFor="getCoord" className="form-label fw-bold">Get Coordinate</label>

                    <button
                        className="btn btn-sm btn-outline-secondary mb-2 w-100"
                        onClick={props.getLocation}
                    >
                        <i className="fa fa-crosshairs me-2"></i> Get Coordinates
                    </button>

                    <div className="row g-2">
                        <div className="col-6">
                            <label htmlFor="lat" className="visually-hidden">Latitude</label>
                            <input
                                type="number"
                                step="any"
                                className="form-control form-control-sm"
                                name="lat"
                                id="lat"
                                value={props.lat}
                                onChange={props.change}

                                placeholder="Latitude"
                                aria-describedby="helpId"
                            />
                        </div>

                        <div className="col-6">
                            <label htmlFor="lon" className="visually-hidden">Longitude</label>
                            <input
                                type="number"
                                step="any"
                                className="form-control form-control-sm"
                                name="lon"
                                id="lon"
                                value={props.lon}
                                onChange={props.change}
                                placeholder="Longitude"
                                aria-describedby="helpId"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-1 d-flex align-items-end pb-1">
                <button
                    className="btn btn-primary btn-sm px-2 py-1"
                    type="button"
                    onClick={props.search}
                    title="Search"
                >
                    {/* Agar FontAwesome installed hai */}
                    <i className="fa fa-search"></i>

                    {/* Agar icon nahi dikh raha toh ye emoji use karein */}
                    {/* 🔍 */}
                </button>
            </div>
        </div>

    );
}
