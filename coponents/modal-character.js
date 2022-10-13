import { html, LitElement } from "lit-element";
class ModalCharacter extends LitElement{
    static get properties(){
        return{
            id:{type:Number},
            character:{type:Object},
            fun:{type:Object},
            statusRemoveModal:{type: Boolean}
        }
    } 
    constructor(){
        super();
        this.id=0;
        this.character={};
        this.statusRemoveModal=false;
    }
    _Character(){
        let m=0;
        if(this.id!=0 &&m<2){
            fetch(`https://rickandmortyapi.com/api/character/${this.id}`)
            .then(res=>res.json())
            .then(character=>  this.character=character)
            .catch(err=>console.log(err))
        }
    }

    render(){
        this._Character();
        return this.id!=0? html`
            <div>
                <img src='${this.character.image}'/>
            </div>
        `:''
    }
}

customElements.define('modal-character',ModalCharacter);