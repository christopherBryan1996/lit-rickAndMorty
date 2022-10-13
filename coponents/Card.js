import { html, LitElement } from "lit-element";
import { style } from "../css/css-main";

class Card extends LitElement{
    static get properties(){
        return {
            image:{type:String},
            name:{type:String},
            species:{type:String},
            gender:{type:String},
            id:{type:Number},
        }
    }
    static get styles(){
        return[
            style
        ];
    }
    constructor(){
        super();
        this.image='';
        this.name='';
        this.species='';
        this.gender='';
        this.id=0;
    }
    render(){
        return html`
            <div class='card'>
                <img src=${this.image} alt='character' class='img-character'/>
                <h1 class='name'>${this.name}</h1>
                <p>Species: ${this.species}</p>
                <p>Gender: ${this.gender}</p>
                <slot id='button'></slot>
            </div>
        `
    }
}

customElements.define('lit-card',Card)