import React from "react";
import imagem from "./google.png"
import './disclaimer.css'
import headline from './headline.svg'

function Disclaimer () {
    return (
        <div className="fonte-disclaimer">
            <img src={headline} class='google' />
        </div>
    )
}

export default Disclaimer;