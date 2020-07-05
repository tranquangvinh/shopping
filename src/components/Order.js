import React, { Component } from 'react';
import OrderItem from './OrderItem';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

class Order extends Component {

    constructor(props){
        super(props);

        this.state = {
            cardList: []
        }
    }

    componentWillMount(){
        const cardList = localStorage.getItem('cardList') ? JSON.parse(localStorage.getItem('cardList')) : [];
        this.setState({cardList : cardList});
    }

    updateCount = (count, id) =>{
        let cardList = [...this.state.cardList];
        cardList.forEach((item) =>{
            if(item.id === id){
                item.count = count;
            }
        })
        this.setState({cardList: cardList});
        localStorage.setItem('cardList', JSON.stringify(cardList));
    }

    removeProduct = (id) =>{
        let cardList = [...this.state.cardList];

        let index = -1;
        index = cardList.forEach((item, i) => {
            if(item.id === id){
                index = i;
            }
        })

        if (index !== -1) {
            cardList.splice(index, 1);
            this.setState({cardList: cardList});
            localStorage.setItem('cardList', JSON.stringify(cardList));
        }
    }

    render(){
        const elements = this.state.cardList.map((item, index) => {
            return <OrderItem removeProduct={this.removeProduct} updateCount={this.updateCount} key={index} cardItem={item} />
        })

        let total = 0;
        this.state.cardList.map((item) => {
            return total = total + (item.price * item.count);
        });
        
        return(
            <div className="mb-5">
                <h1 className="title-top">
                    List Order
                </h1>  
                <div className="mt-5 order-list">
                    {elements}
                </div>
                <div className="total d-flex justify-content-between mt-3">
                    <Link to="/">
                        Go to list product
                    </Link>
                    <span>
                        <span className="total">Total:</span> 
                        <span className="ml-3 total-price">
                            <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </span>
                    </span>
                </div>
            </div>
        );
    }
}

export default Order;