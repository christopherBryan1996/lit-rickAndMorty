import { LitElement, html } from "lit-element";
import { style } from "../css/css-main";
import GetMasterData from "./Get-masterData";
import './modal-character.js'
import './Card.js'

class MainContainer extends LitElement{
    static get properties(){
        return{
            character:{type: Array},
            showModal:{type: String},
            id:{type: Number}
        }
    }
    static get styles(){
        return[
            style
        ];
    }
    constructor(){
        super();
        this.character=this._getCharacter();
        this.showModal='hidden';
        this.id=0;
        
    }
    _getCharacter(){
        let _dmGetCharacter= new GetMasterData();
        _dmGetCharacter.addEventListener('success-call',this._setCharacter.bind(this));
        _dmGetCharacter.addEventListener('error-call',this._showError.bind(this));
        _dmGetCharacter.generateRequestRaM();
    }
    _setCharacter(data){
        this.character=data.detail;
    }
    _showError(error){
        console.log(error);
    }
    _handleOnClick(e){
        e.preventDefault()
        this.id= e.target.id;
        this.showModal='';
    }
    _handleOnClickClose(e){
        e.preventDefault()
        this.showModal='hidden';
    }
    render(){
            return this.character?html`
                <div class="div-global">
                    <!-- TODO: crear una web component de las etiquetas siguientes -->
                    ${this.character.map(e => html`
                        <lit-card image=${e.image} name=${e.name} species=${e.species} gender=${e.gender}>
                            <button name='button' id=${e.id} @click=${this._handleOnClick}>Watch</button>
                        </lit-card>
                        <!-- <div class='card'>
                            <img src=${e.image} alt='character' class='img-character'/>
                            <h1 class='name'>${e.name}</h1>
                            <p>Species: ${e.species}</p>
                            <p>Gender: ${e.gender}</p>
                            <button id=${e.id} @click=${this._handleOnClick}>Watch</button>
                        </div> -->
                    `)}
                    <!-- <div class='modal ${this.showModal} '>modal</div> -->
                    <div class='modal ${this.showModal}'>
                        <div><img src='../img/close.png' width="15px" @click=${this._handleOnClickClose}></div>
                        <modal-character id=${this.id}></modal-character>
                    </div>
                </div>
            `: '';
        
    }

}

customElements.define('main-container',MainContainer)