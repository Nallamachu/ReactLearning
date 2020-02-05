import React from 'react';
import './App.css';
import { FriendList } from './component/friend-list/friend-list.component';
import { SearchBox } from './component/search-box/search-box.component';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      friends: [],
      searchInput: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({friends: users}));
  }

  handleChange = e => {
    this.setState({searchInput: e.target.value})
  };

  placeholder = () =>{
    this.setState({placeholder: "Search Here"})
  };

  render(){
    const {friends,searchInput} = this.state;
    const filteredFriends = friends.filter(
      friend => friend.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return(
      <div className='App'>
        <SearchBox 
          placeholder = 'Search Here'
          handleChange = {this.handleChange}
        />
        
        <FriendList friends={filteredFriends} />
    </div>
    );
  }
}

export default App;
