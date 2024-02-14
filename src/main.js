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

export default {
  Canva
};
