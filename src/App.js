import React, { Component } from 'react';
import Nav from './Nav'
import ItemPage from './ItemPage'
import {items} from './static_data'
import './App.css';

class App extends Component {

  // initializing state for selecting tabs
  state ={
    ActiveTab: 0,
    cart : []
  }
  //method to change the initial state
  handleTabChange = (index)=>{
    this.setState({
      ActiveTab:index
    });
  }
  // add items to cart
  handleAddToCart = (item)=>{
    this.setState({
      cart : [...this.state.cart, item.id]
    })
  }
  renderComponent = () => {
    switch (this.state.ActiveTab) {
      default:
      case 0: return <ItemPage items={items} onAddToCart={this.handleAddToCart}/>;
      case 1: return <span>Cart</span>;
    }
  }
  render() {
    let active_tab = this.state.ActiveTab
    return (
      <div className="App">
        <Nav activeTab={active_tab} onTabChange={this.handleTabChange}/>
        <div>
  {this.state.cart.length} items
</div>
        <main className="App-content">
        {this.renderComponent()}
        </main>
      </div>
    );
  }
}

export default App;
