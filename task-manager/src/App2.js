import React, { Component } from 'react'
import Livre from './cls/Livre'
import ListeLivres from './cls/ListeLivres'

export class App2 extends Component {
constructor(props) {
  super(props)

  this.state = {
     tabLivres:[
        {titre:"titre1",auteur:"auteur1",annee_publication:2000},
        {titre:"titre2",auteur:"auteur2",annee_publication:1990},
        {titre:"titre3",auteur:"auteur3",annee_publication:1974},
        {titre:"titre4",auteur:"auteur4",annee_publication:2015},
        {titre:"titre5",auteur:"auteur5",annee_publication:2024}
        
            ],
            newTitre: '',
            newAuteur: '',
            newAnneePublication: '' 
  }

  
}

handleAddLivre ()  {
  const { newTitre, newAuteur, newAnneePublication } = this.state;
  if (this.newTitre && this.newAuteur && this.newAnneePublication) {
    this.setState([...tabLivres, {
          id: Date.now(),
          titre: this.newTitre,
          auteur: thisnewAuteur,
          annee_publication: parseInt(newAnneePublication, 10)
      }]);
      setNewTitre('');
      setNewAuteur('');
      setNewAnneePublication('');
  }
};

  render() {
    return (<>
        <input
                type="text"
                value={newTitre}
                onChange={(e) => setNewTitre(e.target.value)}
                placeholder="Titre"
            />
            <input
                type="text"
                value={newAuteur}
                onChange={(e) => setNewAuteur(e.target.value)}
                placeholder="Auteur"
            />
            <input
                type="number"
                value={newAnneePublication}
                onChange={(e) => setNewAnneePublication(e.target.value)}
                placeholder="Année de publication"
            />
            <button onClick={handleAddLivre}>Ajouter</button>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <ListeLivres tabLivres={[...tabLivres, ...livres]} />
            </div>
        </>
    )
  }
}

export default App2