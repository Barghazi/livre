import React from 'react'
import Livre from './Livre'

function ListeLivres({tabLivres}) {
  return (<>
    {tabLivres.map((elt)=>{
        return(
         <Livre titre={elt.titre} auteur={elt.auteur} annee_publication={elt.annee_publication}/>
         )
    })

    }
    </>
  )
}

export default ListeLivres