import React from "react";

export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      face: null,
      compteur: 0,
      fin: false,
      valeurSaisie: ''
    };
  }

  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1; // Lancer le dé
    this.setState((prevState) => ({
      face: valeur,
      compteur: prevState.compteur + 1,
      fin: valeur === parseInt(prevState.valeurSaisie), // Vérifie si la face obtenue correspond à la valeur saisie
    }));
  }

  getImage() {
    const { face } = this.state;
    if (face === null) {
      return "/images/images/vide.PNG"; // Affiche vide.PNG si face est null
    }
    return `/images/images/face${face}.PNG`; // Utilisation d'une URL pour les autres images
  }

  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false, valeurSaisie: '' });
  }

  handleChange = (event) => {
    const { value } = event.target;
    // Vérifie que la valeur est un nombre entre 1 et 6
    if (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 6)) {
      this.setState({ valeurSaisie: value });
    }
  };

  render() {
    const styleImage = { width: "60px", height: "60px" };
    return (
      <div>
        <img src="/images/images/Dé.PNG" alt="Dé" /> {/* Chemin vers Dé.PNG dans public/images/images */}
        <h1>Jeu de Dé...</h1>
        <input 
          type="number" 
          value={this.state.valeurSaisie} 
          onChange={this.handleChange} 
          placeholder="Entrez un nombre (1-6)" 
        />
        <h2>Résultat: {this.state.face !== null ? this.state.face : "?"}</h2>
        <img src={this.getImage()} style={styleImage} alt="Face du dé" />
        <h2>Nombre d'essais: {this.state.compteur}</h2>
        <button onClick={() => this.jouer()}>Lancer le dé</button>
        {/* Affiche un message de bravo si la valeur saisie correspond à la face obtenue */}
        {this.state.fin && <p>Bravo, vous avez trouvé la face cachée (face {this.state.face}) !</p>}
        <button onClick={() => this.initialiser()}>Initialiser</button>
      </div>
    );
  }
}
