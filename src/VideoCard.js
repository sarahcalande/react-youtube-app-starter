import React, {Component} from 'react'



export default class VideoCard extends Component{



state = {
  video: null
}


handleClick=(e)=>{
  this.setState({
    video: e.target
  })
  this.props.displayTheVid(this.state)
}


render(){
console.log("are we getting here?");


return(
<div>
<h1 onClick={this.handleClick}> {this.props.title} </h1>
</div>

)






}









}
