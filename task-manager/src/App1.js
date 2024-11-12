import React from "react";
import JeuDe from "./JeuDe"; // Modifier le chemin d'importation

function App() {
  return (
    <div>
      <h1>Bienvenue dans le Jeu de Dé !</h1>
      <JeuDe cache={2} /> {/* Vous pouvez changer la valeur de cache ici */}
    </div>
  );
}

export default App;
