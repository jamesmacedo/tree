import Canva from './libs/canva.js';

    var canva = new Canva();

    canva.draw();

    var nodes = [
      {
        name:'teste1',
      },
      {
        name:'teste2',
      },
      {
        name:'teste3'
      }
    ]

    canva.addNodes(nodes);

    var button = document.createElement('button');

    button.onclick = ()=>{
      canva.addNode({name:'testeeeee'});
    }
    button.style="position: absolute; top:2; left:2"
    button.innerHTML = "Adicionar";

    document.getElementById("canva").appendChild(button);


export default {
  Canva
};
