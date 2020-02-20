import React from 'react';
import {Link} from "react-router-dom";

function BasketTotals({value}) {
const {basketSubTotal, basketTax, basketTotal, clearBasket} =value;
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
                           <Link to={'/'}>
                               <button onClick={() => clearBasket()} className={'btn btn-outline-danger mb-3 px-5'} type={'button'}>
                                   Clear basket
                               </button>
                           </Link>
                            <h4>
                                <span>
                                    Subtotal:
                                </span>
                                <strong>{basketSubTotal}</strong>
                            </h4>
                            <h4>
                                <span>
                                    VAT:
                                </span>
                                <strong>{basketTax}</strong>
                            </h4>
                            <h4>
                                <span>
                                    Total:
                                </span>
                                <strong>{basketTotal}</strong>
                            </h4>
                        </div>
                    </div>
                </div>
            </>
        );
    }

export default BasketTotals;