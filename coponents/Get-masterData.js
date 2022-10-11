import { LitElement } from "lit-element";

export default class GetMasterData  extends LitElement{
    constructor(){
        super();
    }
    _handleSuccessRes(data){
        try {
            let character = this._fotmatData(data)
            this.dispatchEvent(new CustomEvent('success-call',{detail:character}))
        } catch (error) {
            console.log(error)
            this._handleErrorRes(error)
        }
    }
    _handleErrorRes(dataError){
        console.log(dataError)
        let error ={
            title:'Error de conexion',
            body:'Intentar de nuevo'
        }
        this.dispatchEvent(new CustomEvent('error-call',{detail:error}))
    }
    _fotmatData(characters){
        let formatGet=[]
        characters.results.forEach(character => {
            formatGet.push({
                id:character.id,
                name:character.name,
                species: character.species,
                gender: character.gender,
                image: character.image
            })
        });
        return formatGet
    }
    generateRequestRaM(){
        fetch('https://rickandmortyapi.com/api/character')
        .then((res)=>res.json())
        .then(json=> this._handleSuccessRes(json))
        .catch(err=> this._handleErrorRes(err))
    }
}

customElements.define('get-masterdata',GetMasterData)