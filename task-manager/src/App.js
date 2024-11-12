import React, { Component } from 'react';
import Livre from './cls/Livre';
import ListeLivres from './cls/ListeLivres';

export class App2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabLivres: [
        { titre: "titre1", auteur: "auteur1", annee_publication: 2000 },
        { titre: "titre2", auteur: "auteur2", annee_publication: 1990 },
        { titre: "titre3", auteur: "auteur3", annee_publication: 1974 },
        { titre: "titre4", auteur: "auteur4", annee_publication: 2015 },
        { titre: "titre5", auteur: "auteur5", annee_publication: 2024 }
      ],
      newTitre: '',
      newAuteur: '',
      newAnneePublication: ''
    };
  }

  handleAddLivre = () => {
    const { newTitre, newAuteur, newAnneePublication } = this.state;

    if (newTitre && newAuteur && newAnneePublication) {
      this.setState((prevState) => ({
        tabLivres: [
          ...prevState.tabLivres,
          {
            titre: newTitre,
            auteur: newAuteur,
            annee_publication: parseInt(newAnneePublication, 10)
          }
        ],
        newTitre: '',
        newAuteur: '',
        newAnneePublication: ''
      }));
    }
  };

  render() {
    const { newTitre, newAuteur, newAnneePublication, tabLivres } = this.state;

    return (
      <>
        <input
          type="text"
          value={newTitre}
          onChange={(e) => this.setState({ newTitre: e.target.value })}
          placeholder="Titre"
        />
        <input
          type="text"
          value={newAuteur}
          onChange={(e) => this.setState({ newAuteur: e.target.value })}
          placeholder="Auteur"
        />
        <input
          type="number"
          value={newAnneePublication}
          onChange={(e) => this.setState({ newAnneePublication: e.target.value })}
          placeholder="Année de publication"
        />
        <button onClick={this.handleAddLivre}>Ajouter</button>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <ListeLivres tabLivres={tabLivres} />
        </div>
      </>
    );
  }
}

export default App2;
