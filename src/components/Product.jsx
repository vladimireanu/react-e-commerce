import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";

class Product extends Component {


    render() {
        const {id, title, img, inCart, price} = this.props.product;
        return (
            <div className={'productWrapper col-sm-9 mx-auto col-md-6 col-lg-3 my-3'}>
                <div className="cardProducts">
                    <div className="row">
                        <ProductConsumer>
                            {(value) => (
                                <>
                                    <div className={'img-container p-5'} onClick={() => {
                                        value.handleDetail(id);
                                    }}>
                                        <Link to={'/details'}>
                                            <img  alt={'product'} src={img} className={'card-img-top'}/>
                                        </Link>
                                    </div>
                                    <div className={'buttonContainer'}>
                                        <button disabled={inCart ? true : false} onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart ? (
                                                <p className={'text-capitalize mb-0'} disabled>
                                                    in basket</p>
                                            ) : (
                                                <img src={'/img/cart-plus-solid.svg'} alt={'image'}/>)}
                                        </button>
                                    </div>
                                </>
                            )}
                        </ProductConsumer>
                        <div className={'productFooter'}>
                            <p>{title}</p>
                            <h5>{price}<span>$</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;