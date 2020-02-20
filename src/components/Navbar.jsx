import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Navbar extends Component {
    render() {

        return (
            <nav>
                <div className="contain">
                    <div className="navButtons">
                        <Link to={'/'}>
                            <h2>MegaDiscount</h2>
                        </Link>
                    </div>
                    <div className="buttons3">
                        <Link to={'/'}>
                            <h4>Products</h4>
                        </Link>
                        <Link to={'/'}>
                            <h4>Products</h4>
                        </Link>
                        <Link to={'/'}>
                            <h4>Products</h4>
                        </Link>
                        <Link to={'/'}>
                            <h4>Products</h4>
                        </Link>
                        <Link to={'/'}>
                            <h4>Products</h4>
                        </Link>
                        <Link to={'/'}>
                            <h4>Products</h4>
                        </Link>
                        <Link to={'/basket'}>
                            <button className={'basketButton'}>
                                <i className="fas fa-shopping-cart"></i>
                            </button>

                        </Link>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navbar;