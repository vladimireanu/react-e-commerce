import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";


class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {title, id, info, company, price, img, inCart} = value.detailProduct;
                    console.log(info);
                    return (
                        <section>
                            <div className={'detailContainer'}>
                                <div className={'detailTitle'}>
                                    <span>{title}</span>
                                </div>
                                <div className={'detailImg'}>
                                    <img src={img} alt={title}/>
                                </div>
                                <div className={'detailInfo'}>
                                    <h2>Made by: {company}</h2>
                                    <h4>Price {price} $</h4>
                                    <p>{info}</p>
                                </div>
                                <div className={'detailButtons'}>
                                    <button className={'button1'} disabled={inCart?true:false} onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        {inCart ? (
                                            <p className={'text-capitalize mb-0'} disabled>
                                                in basket</p>
                                        ) : (
                                            <img src={'/img/cart-plus-solid.svg'} alt={'image'}/>)}
                                    </button>
                                    <Link to={'/'}>
                                        <button className={'button2'}>Back to products</button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;