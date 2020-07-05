import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class ProductItem extends Component{
    render(){
        const { productItem } = this.props;

        return(
           <div className="col-12 col-md-4 col-lg-4">
                <div className="card mt-5">
                    <div className="img-card">
                        <img className="p-3" alt="" src={productItem.thumbnail} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{productItem.name}</h5>
                        <p className="d-flex justify-content-start align-items-end">
                            <span className="price-sale mr-1">
                                <NumberFormat value={productItem.sale} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </span>  
                            <span className="price">
                                <NumberFormat value={productItem.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </span>   
                        </p>
                        <p className="card-text">{productItem.des}</p>
                        <button  onClick={() => this.props.addToCard(productItem.id)} className="btn btn-success">Add to card</button>
                    </div>
                </div>
           </div>
        );
    }

}

export default ProductItem;