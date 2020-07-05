import React,  { Component } from 'react';
import NumberFormat from 'react-number-format';

class OrderItem extends Component{

    changeCount = (count) => {
        if(count > 0){
            this.props.updateCount(count, this.props.cardItem.id);
        }
    }

    render(){
        const { cardItem } = this.props;
        return(
            <div className="row order d-flex p-3">
                <div className="thumbnail col-4 col-md-2 col-lg-2">
                    <img alt="" src={cardItem.thumbnail}/>
                </div>
                <div className="product-content col-8 col-md-10 col-lg-10 d-flex">
                   <div className="row">
                    <div className="info col-12 col-md-8 col-lg-8">
                            <p className="title">{cardItem.name}</p>
                            <p className="des">{cardItem.des}</p>
                            <p className="remove-product" onClick={() => this.props.removeProduct(cardItem.id)}>
                                remove
                            </p>
                        </div>
                        <div className="action text-right d-flex justify-content-end align-items-baselin col-12 col-md-4 col-lg-4" >
                            <div className="price mr-4">
                                <NumberFormat value={cardItem.price * cardItem.count} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </div>
                            <div className="box-count">
                                <span className={'qty-decrease ' + (cardItem.count === 1 ? 'disable' : '')} onClick={() => this.changeCount(cardItem.count - 1)}>-</span>
                                <input type="tel" className="qty-input" value={cardItem.count} onChange={(e) => this.changeCount(e.target.value)} />
                                <span className="qty-increase" onClick={() => this.changeCount(cardItem.count + 1)}>+</span>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default OrderItem;