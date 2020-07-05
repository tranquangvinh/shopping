import React,  { Component } from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

class ListProduct extends Component{

    render(){
        const { listProduct, cardList } = this.props;
        let elements = null;
        if(listProduct){
            elements = listProduct.map((item, index) => {
                return (
                    <ProductItem addToCard={(id) => this.props.addToCard(id)} productItem={item} key={index}></ProductItem>
                );
            });
        }
        console.log(cardList);
       
        return (
            <div className="text-left">
                <div className="box-list-product">
                    <h1 className="title-top">List Product</h1>
                    <span className="icon-order">
                        <Link to="/order">
                            <img alt="" src="https://apps.odoo.com/apps/icon_image?module_id=20451" />
                        </Link>
                         <span className={cardList ? 'card-count' : ''}>{cardList ? cardList.length : ''}</span>
                    </span>    
                </div>
                
                <div className="row">
                    {elements}
                </div>
            </div>
        );
    }
}

export default ListProduct;