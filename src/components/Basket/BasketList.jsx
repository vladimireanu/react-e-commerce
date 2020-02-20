import React from "react";
import BasketItem from './BasketItem';

function BasketList({value}) {
    const {cart} = value;
    return (<div className={'container-fluid'}>
            {cart.map(item =>{
                return  <BasketItem key={item.id} item={item} value={value}/>
            })}
    </div>
    );
}

export default BasketList;