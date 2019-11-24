import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    products: [],
    title: "",
    img: "",
    price: 0,
    id: ""
  }

  createProduct = async () => {
    var toSend = {
      title: this.state.title,
      img: this.state.img,
      price: this.state.price
    }

    var resp = await fetch("http://localhost:3550/products", {
      method: "POST",
      body: JSON.stringify(toSend),
      headers: { "Content-type": "application/json" }
    })
    var products = await resp.json()
    this.setState({ products: products })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <input type="text" value={this.state.title} onChange={val => this.setState({ title: val.target.value })} placeholder="Product title" />
          <input type="text" value={this.state.img} onChange={val => this.setState({ img: val.target.value })} placeholder="img url" />
          <input type="text" value={this.state.price} onChange={val => this.setState({ price: val.target.value })} placeholder="price" />

          <input type="button" onClick={() => this.createProduct()} value="Create Product" />

          {this.state.products.map(product => <div key={product.id}>
            <p>{product.title}</p>
            <img src={product.img} />
            <p>Price: ${product.price}</p>
            <p>Date Created: {product.createdAt}</p>
            <hr />
          </div>)}
        </header>
      </div>
    );
  }

  componentDidMount = async () => {
    var productResp = await fetch("http://localhost:3550/products")
    var json = await productResp.json();

    this.setState({
      products: json
    })
  }
}

export default App;
