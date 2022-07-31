/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const btn = document.getElementByClassName("reset");
{
   function criatab(){
        const Tabuleiro = document.querySelector("#grid");
        var tabuleiro= [];
        
        for(let x = 0; x<8;x++){
            for(let y = 0; y<8; y++){
                let peca = document.createElement('button');
                peca.setAtribute("id", `x${x}`);
                peca.setAtribute("class","peca");
                tabuleiro.appendChild('peca');
                 
            }
        }
        peca.innerHTML = `x${x}y${y}`;
    }
} criatab();