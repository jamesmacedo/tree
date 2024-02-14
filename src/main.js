import Canva from './libs/canva.js';
import Node from './libs/node.js';

    var canva = new Canva();

    canva.draw();

    var node = new Node({name:'testando'});

    canva.addNode(node.draw());  
    canva.addNode(node.draw());  
    canva.addNode(node.draw());  


export default {
  Canva,
  Node
};
