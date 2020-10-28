import React from 'react';
import "./start.css";

function hideDiv() {
  document.querySelector('.accessApp').style.display = "none"
}

function Start() {
  return (
    <div className="accessApp" style={{display: "block"}}>
      <h1>Bienvenu(e)</h1>
      <p>Savez-vous vraiment de quoi est composé le système solaire ? Vous trouverez sur cette page une présentation détaillée de ce qui compose le système solaire : Notre étoile le Soleil et ses planètes</p>
      <button type="submit" onClick={hideDiv}>Commencer le voyage</button>
    </div>
  );
}

export default Start;
