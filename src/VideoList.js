import React, {Component} from 'react'
import VideoCard from './VideoCard.js'


export default class VideoList extends Component{






render(){
console.log("in list", this.props.videos);
  let videocards
if (this.props.videos.length > 0) {
    videocards = this.props.videos.map(videoobj => <VideoCard key={videoobj.id.videoId} title={videoobj.snippet.title} displayTheVid={this.props.displayTheVid}/>)
}
console.log("videocards", videocards);
return(
  <div>
  {videocards ? videocards:null}
  </div>
)


}






}
