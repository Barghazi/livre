import React, { Component } from 'react'
import Livre from './Livre'

export class ListeLivres extends Component {
    constructor(props) {
      super(props)
    
      
    }
  render() {
    return (
        <>
        {this.props.tabLivres.map((elt)=>{
            return(
             <Livre titre={elt.titre} auteur={elt.auteur} annee_publication={elt.annee_publication}/>
             )
        })
    
        }
        </>
    )
  }
}

export default ListeLivres