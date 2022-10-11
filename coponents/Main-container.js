import { LitElement, html } from "lit-element";
import { style } from "../css/css-main";
import GetMasterData from "./Get-masterData";

class MainContainer extends LitElement{
    static get properties(){
        return{
            character:{type: Array}
        }
    }
    static get styles(){
        return[
            style
        ]
    }
    constructor(){
        super()
        this.character=this._getCharacter()
    }
    _getCharacter(){
        let _dmGetCharacter= new GetMasterData()
        _dmGetCharacter.addEventListener('success-call',this._setCharacter.bind(this))
        _dmGetCharacter.addEventListener('error-call',this._showError.bind(this))
        _dmGetCharacter.generateRequestRaM()
    }
    _setCharacter(data){
        this.character=data.detail
    }
    _showError(error){
        console.log(error)
    }
    _handleOnClick(e){
        return html`
            hola
        `
    }
    render(){
        if(this.character){
            return html`
                <div class="div-global">
                    ${this.character.map(e => html`
                        <div class='card'>
                            <img src=${e.image} alt='character' class='img-character'/>
                            <h1 class='name'>${e.name}</h1>
                            <p>Species: ${e.species}</p>
                            <p>Gender: ${e.gender}</p>
                            <button id=${e.id} @click=${this._handleOnClick}>Watch</button>
                        </div>
                    `)}
                </div>
            `
        }
    }
}

customElements.define('main-container',MainContainer)