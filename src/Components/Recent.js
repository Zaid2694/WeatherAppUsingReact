import React from 'react'

export default function Recent(props) {
    let data;
    // console.log("props.recent:", props.recent);
    if (props.recent == null) {
        data = "";
    }
    else {
        data = props.recent.map((recentData, id) => {
            // console.log("recentData:", recentData);
            return <li onClick={() => props.research(recentData.lat, recentData.lon)}
                className="shadow mt-3 bg-dark text-light p-1"
                key={id}>
                {recentData.city}

            </li>


        });
    }
    return (
        <div>
            <div className="recent-box"        >
                <h3 className='shadow p-2'>Recent Searches</h3>
                <ul className=" list-unstyled">
                    {data}
                </ul>

            </div >
        </div>
    )
}


