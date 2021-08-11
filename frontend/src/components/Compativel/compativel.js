import React, { Component } from "react";
import "./compativel.css"

export class Compativel extends Component {
    render(){
        return(
        <div class="container">
            <h3>Pessoas compatíveis:</h3>

            <div class="fp">
                <img className='imgComp' src="fp.jpg" alt="Foto de perfil"/>
                <img className='imgComp' src="fp.jpg" alt="Foto de perfil"/>
                <img className='imgComp' src="fp.jpg" alt="Foto de perfil"/>
                <img className='imgComp' src="fp.jpg" alt="Foto de perfil"/>
            </div>

        </div>
        );
    }
}

export default Compativel;