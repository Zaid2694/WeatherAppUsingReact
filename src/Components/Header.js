import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{ backgroundColor: '#212529' }}>
                    <div className="container">
                        <Link className="navbar-brand" href="#">
                            <i className="fa fa-cloud"></i> Weather App
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        <i className="fa fa-home"></i> Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/weather">
                                        <i className="fa fa-cloud"></i> Weather
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
