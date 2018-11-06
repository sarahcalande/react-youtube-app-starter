import React, {Component} from 'react'
import SearchBar from './SearchBar.js'
import VideoDisplay from './VideoDisplay.js'
import VideoList from './VideoList.js'

export default class Container extends Component{

  state = {
   videos: [],
   onevideo: null
  }




displayTheVid=(vidstateobject)=>{
  console.log();
  this.setState({
    onevideo: vidstateobject
  })
}


  renderVideos=(stateobject)=>{
    console.log("rendering");
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDQxQviJO_4zDiyyBEuOyVLesCM-AKil7c&q=${stateobject}&type=video`
)
  .then(r=>{
    return r.json()})
  .then(data => {
    this.setState({
    videos: data.items
  })})
  }




render(){
  console.log(this.state.videos);

return(
  <div>
  <SearchBar renderVideos={this.renderVideos}/>
  <VideoDisplay video={this.state.onevideo}/>
  <VideoList videos={this.state.videos} displayTheVid={this.displayTheVid}/>
  </div>

)



}




}
