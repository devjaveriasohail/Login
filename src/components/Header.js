
import React from "react";

const Header = ({ loginData }) => {


    return (
        <div>
            {loginData?.map((data, id) => {
                return (<div>
                    {/* id={data.id} */}
                    <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <a className="navbar-brand" href="#">Myapp</a>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" >Contact us</a>
                                    </li>
                                </ul>

                               
                               <p className="h5 m-4">{data.fname} {data.lname}</p>
                                <img src={data.avatar} className="Img" alt="..." />
                             
                               
                                   
                               
                            </div>
                        </div>
                    </nav>
                </div>)
            })}
        </div>

    )
}
export default Header