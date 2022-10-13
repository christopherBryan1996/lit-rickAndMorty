import { css } from "lit-element";

export const style=css`
    *{
        font: oblique bold 90% cursive;
    }
    
    .div-global {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        background: black;
    }
    .card {
        border: 1px solid;
        border-radius: 13px;
        margin: 7px 8px 7px 8px;
        padding: 3px 5px 0 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #ffffffed;
        height: 257px;
    }
    .img-character {
        width: 140px;
        border-radius: 9px;
    }
    .name {
        font: oblique bold 113% cursive;
        margin: 2px 0px 0px;
        width: 131px;
        text-align: center;
    }
    
    p{
        margin: 2px 0px 0px 0;
    }
    
    button {
        margin: 10px 0px 0px 0px;
    }
    .modal{
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: #faebd7a8;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        flex-direction: column;
    }
    .hidden{
        display:none;
        color:white;
    }
`