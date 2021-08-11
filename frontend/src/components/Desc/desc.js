import React, { Component } from "react";
import "./desc.css"

export class Desc extends Component {
    render() {
        return (
            <div className='container'>

                <div className='albumCasa'>
                    <img className='imgdesc' src="ap.jpg" alt="Apartamento ABC" />
                    <img className='imgdesc' src="ap2.jpg" alt="Apartamento ABC" />
                    <img className='imgdesc' src="ap3.jpg" alt="Apartamento ABC" />
                </div>
                <div className='infoCasa'>
                    <h1>R$100,00/Mês</h1>
                    <h3>condomínio: R$17,00 - IPTU: R$1,99</h3>
                    <h4>No Apartamento ABC você encontrará o maior conforto e a melhor localização da cidade XYZ por um preço que cabe no seu orçamento. </h4>
                    <h5 className='infoComodos'>4 quartos, 4 banheiros, sala, cozinha, varanda com bela vista e churrasqueira, 2 vagas na garagem.</h5>
                </div>

            </div>
        );
    }
}

export default Desc;