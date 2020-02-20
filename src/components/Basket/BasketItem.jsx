import React from "react";


function BasketItem({item,value}) {
    const{id, title, img, price, total, count} = item;
    const {increment,decrement,removeItem} = value;
    console.log(increment);
    return (
            <div className="row my-2 text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} style={{width: '5rem', height: '5rem' }} className={'image-fluid'}  alt={'product'}/>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    {title}
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    {price}
                </div>

                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className={'btn btn-black mx-1'} onClick={() => decrement(id)}>-</span>
                            <span className={'btn btn-black mx-1'}>{count}</span>
                            <span className={'btn btn-black mx-1'} onClick={() => increment(id)}>+</span>
                        </div>
                    </div>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                   <div className="cart-icon" onClick={()=> removeItem(id)}>
                       <i className={'fas fa-trash'}/>
                   </div>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    Item Total: {total} $
                </div>
            </div>


    )
}

export default BasketItem;