// import React, { Component } from 'react'



// // class Form extends Component {
// //  state = {}
// //  render() {
// //   return(
// //    <div></div>
// //     )
// //    }
// //  }



// export default Form
import React,{Component} from "react";


class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Sizning raqamingiz qabul qilindi: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
           
            <input type="number" value={this.state.value} onChange={this.handleChange}  placeholder="+998 (__) ___-__-__"/>
          </label>
          <input className="button" type="submit" value="Qo'ng'iroq qiling" />
        </form>
      );
    }
  }

  export default Form