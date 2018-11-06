import React, {Component} from 'react'




export default class VideoDisplay extends Component {






render(){

if (this.props.video){
  return(
    < iframe src= {this.props.video.embedUrl}/>
  )
}
else{
  return(
    <div>NOTHIGN</div>
  )
}







}

}
