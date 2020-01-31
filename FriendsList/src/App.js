import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({friends: users}));
  }

  render(){
    return(
      <div className="App">
      <header className="App-header">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>NAME</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>WEBSITE</th>
            </tr>
          </thead>
          {this.state.friends.map(
            friend => (
              <tbody>
                <tr key={friend.id}>
                  <td>{friend.id}</td>
                  <td>{friend.name}</td>
                  <td>{friend.username}</td>
                  <td>{friend.email}</td>
                  <td>{friend.phone}</td>
                  <td>{friend.website}</td>
                </tr>
              </tbody>          
              )
          )}
          </Table>
      </header>
    </div>
    );
  }
}

export default App;
