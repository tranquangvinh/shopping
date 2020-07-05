import React, { Component } from 'react';
import ListProduct from './ListProduct';

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      listProduct : [],
      cardList: []
    }
  }

  componentWillMount(){
    let generalListProduct = localStorage.getItem('listProduct');
    let cardList = localStorage.getItem('cardList');

    if(!generalListProduct){
      generalListProduct = [
        {
          id: this.randomId(),
          name: 'Product 1',
          price: 15000000,
          sale: 1000000,
          thumbnail: 'https://product.hstatic.net/1000329106/product/iphone-11-128gb-600x600_8768a19019dc4849aa01742b51dc2192_grande.png',
          des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
          id: this.randomId(),
          name: 'Product 2',
          price: 12000000,
          sale: 900000,
          thumbnail: 'https://www.didongmy.com/vnt_upload/product/04_2020/thumbs/(600x600)_iphone_se_2020_den.png',
          des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
          id: this.randomId(),
          name: 'Product 3',
          price: 1990000,
          sale: 1700000,
          thumbnail: 'https://clickbuy.com.vn/uploads/2019/03/iPhone-7-vang-hong-600x600.png',
          des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
          id: this.randomId(),
          name: 'Product 4',
          price: 1830000,
          sale: 170000,
          thumbnail: 'https://iphonetoanthinh.vn/wp-content/uploads/2019/09/iP-Max-Pro-600x600.png',
          des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
          id: this.randomId(),
          name: 'Product 5',
          price: 170000,
          sale: 100000,
          thumbnail: 'https://didonghd.com/wp-content/uploads/2018/09/iphone8plusRED-600x600.png',
          des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
          id: this.randomId(),
          name: 'Product 6',
          price: 19500000,
          sale: '',
          thumbnail: 'https://product.hstatic.net/1000379792/product/apple-iphone-xs-white_26d7cd85a6de4bcbb1a500dfdc302bed_grande.png',
          des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        }
      ];
      localStorage.setItem('listProduct', JSON.stringify(generalListProduct));
    }else{
      generalListProduct = JSON.parse(generalListProduct);
    }

    if(cardList){
      cardList = JSON.parse(cardList);
    }
    this.setState({
      listProduct: generalListProduct,
      cardList: cardList
    })
   
  }

  randomId(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  addToCard = (id) =>{
    let cardList = localStorage.getItem('cardList');
    if(!cardList){
      cardList = [];
      const productItem = this.findProduct(this.state.listProduct, id);
      if(productItem){
        cardList.push(productItem);
        localStorage.setItem('cardList', JSON.stringify(cardList));
      }
    }else{
      cardList = JSON.parse(cardList);
      let indexOfProduct = -1;
      cardList.forEach((item) => {
        if(item.id === id){
          item.count += 1; 
          indexOfProduct = 1;
        }
      });
      if(indexOfProduct === -1){
        const productItem = this.findProduct(this.state.listProduct, id);
        if(productItem){
          cardList.push(productItem);
        }
      }
      localStorage.setItem('cardList', JSON.stringify(cardList));
    }
    if(cardList){
      this.setState({cardList: cardList})
    }
  }

  findProduct(listProduct, id){
    const productItem = listProduct.find(el => el.id === id);
    if(productItem){
      productItem.count = 1;
      return productItem;
    }
    return null;
  }

  render(){
    console.log(this.state.cardList);
    return (
        <ListProduct cardList={this.state.cardList} addToCard={this.addToCard} listProduct={this.state.listProduct} ></ListProduct>
    );
  }
}

export default Home;