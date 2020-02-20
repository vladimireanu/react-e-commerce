import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";


class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {price, title, img, inCart,id} = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <div className={'modalContainer'}>
                                <div className={'container'}>
                                    <div className="row">
                                        <div id={'modal'} className="col-8 mx-auto col-md-6 col-lg-4 text-center">
                                            <h4>{title}</h4>
                                            <img src={img} alt={'image'} />
                                            <h5>{price}<span>$</span></h5>
                                            <div className={'detailButtons'}>
                                                <Link to={'/basket'}>
                                                <button className={'button1'} onClick={() => closeModal()}>To basket</button>
                                                </Link>
                                                <Link to={'/'}>
                                                    <button className={'button2'} onClick={() => closeModal()}>Back to products</button>
                                                </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                    }

                }}
            </ProductConsumer>
        );
    }
}

export default Modal;