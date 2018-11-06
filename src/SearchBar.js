import React, {Component} from 'react'



export default class SearchBar extends Component{


state = {
  search: ''
}


    detectChange=(e)=>{
      this.setState({
        [e.target.name]: e.target.value
      })
    }


  handleSubmit=(e)=>{
    console.log("submitting", this.state.search);
    e.preventDefault()
    this.props.renderVideos(this.state.search)
  }






render(){
return(
<form onSubmit = {this.handleSubmit}>
      <input fluid label="Name" placeholder="Name" name="search" onChange = {this.detectChange}/>
      <button>Submit</button>
</form>
)

}






}
