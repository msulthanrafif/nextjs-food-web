import "./post.css"
import { MasterFood } from "@/app/data/MasterFood/index.js"
import Cards from "./cards/page"

const Posts = () => {
    return (
        <>
            <div className="mb-3">
                <ul className="nav nav-underline border-bottom border-secondary">
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">Hot Dishes</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">Cold Dishes</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">Soup</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">Grill</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="#">Appetizer</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Dessert</a>
                    </li>
                </ul>
            </div>


            <div className="mb-5">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto justify-content-center">
                        <h4>Choose Dishes</h4>
                    </ul>
                    <div className="dropdown">
                        <button className="btn btn-dark btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Dine In
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Take It</a></li>
                            <li><a className="dropdown-item" href="#">Delivery</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row">
                {MasterFood.data.map(function (item, i) {
                    return (
                        <div key={i} className="col-md-4 mb-5">
                            <Cards {...item} />
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Posts