import React, {Component} from 'react';
import CartColumns from './CartColumns';
import EmptyBasket from './EmptyBasket';
import {ProductConsumer} from "../../context";
import BasketList from "./BasketList";
import BasketTotals from'./BasketTotals'

class Basket extends Component {
    render() {
        return (
            <section className={'basket'}>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0) {
                            return (
                                <>
                                    <CartColumns />
                                    <BasketList value={value}/>
                                    <BasketTotals value={value} history={this.props.history}/>
                                </>)
                        } else {
                            return <EmptyBasket/>
                        }
                    }
                    }
                </ProductConsumer>
            </section>
        );
    }
}

export default Basket;