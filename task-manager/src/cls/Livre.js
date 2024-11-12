import React, { Component } from 'react'

export class Livre extends Component {
    constructor(props) {
      super(props)
    
    }
  render() {
    return (
        <div style={{border:"1px solid blue",padding:"50px",margin:"5px",borderRadius:"30px",width:"20%",fontSize:"x-large"}}>{this.props.titre}<br/>
        {this.props.auteur}<br/>
        {this.props.annee_publication}<br/></div>
    )
  }
}

export default Livre