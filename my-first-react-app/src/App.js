import React from 'react';
import Card from './Components/Card';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
    user: '',
    followers: []
    };
  }

  componentDidMount(){
    axios
    .get('https://api.github.com/users/Barbora-Dejlova')
    .then(res1=>{
      console.log(res1.data)
      axios
      .get(res1.data.followers_url)
      .then(res2=>{
        console.log(res2.data)
        this.setState({
          user: res1.data,
          followers: res2.data
        })
      })
    })
  }

  render(){
    return(
      <div className = 'some div'>
        <h1>Github Usercards</h1>
        <Card 
          userImg = {this.state.user.avatar_url}
          name = {this.state.user.name}
          username = {this.state.user.login}
          profile = {this.state.user.url}
          followers = {this.state.user.followers}
        
          />
          <h2>My Followers</h2>
        {
        this.state.followers.map(user=>{
          return <Card 
          userImg = {user.avatar_url}
          name = {user.name}
          username = {user.login}
          profile = {user.url}
          followers = {user.followers}
    
          />
        })
        }
      </div>
    )
  }
}
export default App;