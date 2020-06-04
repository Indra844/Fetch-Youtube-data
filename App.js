import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Header from './header'

class App extends Component{
  constructor(){
    super()
    this.state={
      videoId:[]
    }
  }

  componentDidMount(){
    fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDRXT-U7iglg9RHUsOv-NUS260wCMqU7xQ&channelId=UC8butISFwT-Wl7EV0hUK0BQ&part=snippet,id&order=date&maxResults=30")
    .then(response => response.json())
    .then(data =>{
      const videoId=data.items.map(obj =>"https://www.youtube.com/embed/"+obj.id.videoId);
      this.setState({
        videoId:videoId
      })
      console.log(this.state.videoId)
      }
    )}

  render(){
  return (
    <div className="App">
      <Header />
      
      {this.state.videoId.map((link,i) => (

          <div className="iframe" key={i}>
              <iframe width="560" height="315" src={link}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
             </iframe>
          </div>
      ))}     
    </div>
  );
  }
}

export default App;
