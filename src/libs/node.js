import * as helpers from '../utils/helpers.js'
import {pathLine,removePath,addLine,updateLines,hasLine} from '../utils/lines.js'

export default class Node{

      constructor(data){
        this.data = data;
      }

      draw(){
        let node = document.createElement('div');

        node.className = "node"; 
        node.innerHTML = this.data.name;
        var id = `node_${helpers.randomStr()}`;
        node.id = id;

        node.onmousedown = function(e){

          var collided = null;
          node.id = `${id}_dragging`;

          const moveAt = (x,y)=>{
            node.style.left = x - node.offsetWidth/2 + "px";
            node.style.top = y - node.offsetHeight/2 + "px";
          }
          
          function onMouseMove(e){
            moveAt(e.pageX,e.pageY);
            
            updateLines();
            collided = helpers.checkCollisions(node)
            if(!hasLine(node,collided)) pathLine(node,collided);
          }

          document.addEventListener('mousemove', onMouseMove);

          node.onmouseup = function() {
            removePath();
            document.removeEventListener('mousemove', onMouseMove);
            node.id = id;
            if(collided !== null && !hasLine(node,collided)){
              addLine(node,collided);
            }
            node.onmouseup = null;var id = `node_${helpers.randomStr()}`; 
          };
        } 
        this.element = node;


        var delete_button = document.createElement('button');
        delete_button.className = 'delete_button';
        delete_button.onclick = () =>{
          node.remove();
          updateLines();
        };
        node.appendChild(delete_button);

        return node;
      }

    }
