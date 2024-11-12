import React from 'react'

function Livre({titre,auteur,annee_publication}) {
  return (
    <div style={{border:"1px solid red",padding:"50px",margin:"5px",borderRadius:"30px",width:"20%",fontSize:"x-large"}}>{titre}<br/>
    {auteur}<br/>
    {annee_publication}<br/></div>
  )
}

export default Livre