import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      nComments: 0,
      asin: ""
    };
  }

  render() {

    var toMap = 
    return (
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }

  componentDidMount = async () => {
    var res = await fetch("http://localhost:3450/books?category" + this.props.genre);
    var books = await res.json();

    this.setState({
      books: books
    })
  }

}

export default App;


