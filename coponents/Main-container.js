import { LitElement } from "lit-element";
import GetMasterData from "./Get-masterData";

class MainContainer extends LitElement{
    static get properties(){
        return{
            character:{type: Array}
        }
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
    render(){
        
        console.log('list',this.character)
    }
}

customElements.define('main-container',MainContainer)