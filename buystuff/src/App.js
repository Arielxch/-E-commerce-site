// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [
//         { itemName: "Shoe", itemPrice: 5 },
//         { itemName: "Sock", itemPrice: 3 }
//       ],
//       titleABC: "BuyStuff"
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <Header title={this.state.titleABC} />
//         <InventoryItem
//           itemName={this.state.items[0].itemName}
//           itemPrice={this.state.items[0].itemPrice}
//         />
//         <InventoryItem
//           itemName={this.state.items[1].itemName}
//           itemPrice={this.state.items[1].itemPrice} />
//       </div>
//     );
//   }
// }
// const Header = (props) => <h1>hhh- {props.title}</h1>;
// const InventoryItem = (props) => (
//   <div className='InventoryItem'>
//     <strong>{props.itemName}</strong>
//     <hr />
//     <p>{props.itemPrice}</p>
//   </div>
// );




// export default App;

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: [
//         { itemName: 'Shoe', itemPrice: 5 },
//         { itemName: 'Sock', itemPrice: 3 }
//       ],
//       title: 'BuyStaff'
//     };
//   }
//   render() {
//     return (
//       <div className='App'>
//         <Header title={this.title} />
//         <InventoryItem
//           itemName={this.state.item[0].itemName}
//           itemPrice={this.state.item[0].itemPrice} />
//         <InventoryItem
//           itemName={this.state.item[1].itemName}
//           itemPrice={this.state.item[1].itemPrice} />
//       </div>
//     )
//   }
// }

// const Header = (props) => <p>{props.title}</p>;
// const InventoryItem = (props) => (
//   <div className="InventoryItem">
//     <strong>{props.itemName}</strong>
//     <p>{props.itemPrice}</p>
//   </div>
// )
// export default App;

// import React, { Component } from 'react';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: [
//         { Name: 'Shoe', Price: 5 },
//         { Name: 'Sock', Price: 3 }
//       ],
//       title: 'BuyStuff'
//     };
//   }
//   render() {
//     return (
//       <div ClassName='App'>
//         <Header title={this.state.title} />
//         <InventoryItem
//           itemName={this.state.item[0].Name}
//           itemPrice={this.state.item[0].Price} />
//         <InventoryItem
//           itemName={this.state.item[1].Name}
//           itemPrice={this.state.item[1].Price} />
//       </div>
//     );
//   }
// }
// const Header = (props) => <h1>{props.title}</h1>;
// const InventoryItem = (props) => (
//   <div ClassName='InventoryItem'>
//     <strong> {props.itemName}</strong>
//     <hr />,
//     <p>{props.itemPrice}</p>
//   </div>
// );
// export default App;

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: [
//         { name: 'Shoe', price: 5 },
//         { name: "Sock", price: 3 }],
//       title: 'BuyStuff'
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <Header title={this.state.item.title} />
//         <InventoryItem
//           itemName={this.state.item[0].name}
//           itemPrice={this.state.item[0].price} />
//         <InventoryItem
//           itemName={this.state.item[1].name}
//           itemPrice={this.state.item[1].price} />
//       </div>
//     )
//   }
// }

// const Header = (props) => <h1>{props.title}</h1>;
// const InventoryItem = (props) => (
//   <div className='InventoryItem'>
//     <strong>{props.itemName}</strong>
//     <hr />
//     <p>{props.itemPrice}</p>
//   </div>
// );
// export default App;

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: [
//         { itemname: 'Shoe', itemprice: 5 },
//         { itemname: 'Sock', itemprice: 3 }
//       ],
//       title: 'BuyStuff'
//     }
//   }
//   render() {
//     return (
//       <div className='App'>
//         <Header title={this.state.title} />
//         <InventoryItem
//           itemName={this.state.item[0].itemname}
//           itemPrice={this.state.item[0].itemprice} />
//         <InventoryItem
//           itemName={this.state.item[1].itemname}
//           itemPrice={this.state.item[1].itemprice} />
//       </div>
//     )
//   }
// }

// const Header = (props) => <strong>{props.title}</strong>;
// const InventoryItem = (props) => (
//   <div className={InventoryItem}>
//     <h1>{props.itemName}</h1>
//     <hr />
//     <p>{props.itemPrice}</p>
//   </div>
// )

// export default App;

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [
//         { name: 'Shoe', price: 5 },
//         { name: 'Sock', price: 3 }
//       ],
//       title: 'BuyStuff'
//     }
//   }
//   render() {
//     return (
//       <div className='App'>
//         <Header title={this.state.title} />
//         <InventoryItem
//           itemName={this.state.items[0].name}
//           itemPrice={this.state.items[0].price} />
//         <InventoryItem
//           itemName={this.state.items[1].name}
//           itemPrice={this.state.items[1].price} />
//       </div>
//     )
//   }
// }

// const Header = (props) => <h1>{props.title}</h1>;
// const InventoryItem = (props) => (
//   <div className='InventoryItem'>
//     <strong>{props.itemName}</strong>
//     <hr />
//     <p>{props.itemPrice}</p>
//   </div>
// )
// export default App;

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'Shoe', price: 5 },
        { name: 'Sock', price: 3 }
      ],
      title: 'BuyStuff'
    }
  }
  render() {
    return (
      <div className='App'>
        <Header title={this.state.title} />
        <InventoryItem
          itemName={this.state.items[0].name}
          itemPrice={this.state.items[0].price} />
        <InventoryItem
          itemName={this.state.items[1].name}
          itemPrice={this.state.items[1].price} />
      </div>
    )
  }
}
const Header = (props) => <h1>{props.title}</h1>;
const InventoryItem = (props) => (
  <div className='InventoryItem'>
    <strong>{props.itemName}</strong>
    <hr />
    <p>{props.itemPrice}</p>
  </div>
)
export default App;