import * as helpers from '../utils/helpers.js'
import collect from 'collect.js'

var lines =  [];

const bezier = (div1,div2) =>{
    const rect1 = div1.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();
    let x1 = rect1.left + rect1.width / 2;
    let y1 = rect1.top + rect1.height / 2;
    let x2 = rect2.left + rect2.width / 2;
    let y2 = rect2.top + rect2.height / 2;
   
    return {x1:x1,y1:y1,x2:x2,y2:y2,controlX:(x1 + x2) / 2,controlY:y1 - 50}
}


const hasLine = (div1,div2) =>{
  return collect(lines).firstWhere('div2',div1) == null ? false : true; 
}

// This function receive two DOM elements to calcule the distance then draw the line 
const pathLine = (div1,div2) =>{ 
  if(div2 === null){
    document.getElementById('new_path').removeAttribute('d');
    return;
  }
  let be = bezier(div1,div2);
    
  document.getElementById('new_path').setAttribute('d', `M${be.x1},${be.y1} Q${be.controlX},${be.controlY} ${be.x2},${be.y2}`);
}
const removePath = () =>{
  let path = document.getElementById('new_path');
  if(path.getAttribute('d')!= null) path.removeAttribute('d');
}

const addLine = (div1,div2) =>{
    let path = document.createElementNS("http://www.w3.org/2000/svg","path");
    path.id = helpers.randomStr();
    path.setAttribute("fill","none");
    path.setAttribute("stroke","blue");
    path.setAttribute("stroke-width","6");
    let be = bezier(div1,div2);
    lines.push({id:path.id,div1,div2});
    path.setAttribute('d', `M${be.x1},${be.y1} Q${be.controlX},${be.controlY} ${be.x2},${be.y2}`);
    document.getElementById('lines').appendChild(path);
}


const updateLines = () =>{
  lines.forEach((line,key) => { 
    if(!document.body.contains(line.div1) || !document.body.contains(line.div2)){
      lines.splice(key,1); 
      document.getElementById(line.id).remove();
    }else{
      document.getElementById(line.id).setAttribute('d', `M${be.x1},${be.y1} Q${be.controlX},${be.controlY} ${be.x2},${be.y2}`);
    }    
  });
}

export {
  pathLine,
  removePath,
  addLine,
  updateLines,
  hasLine 
};
