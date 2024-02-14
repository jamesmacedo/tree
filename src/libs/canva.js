export default class Canva {

      constructor(){}
      
      setupSvg(){
        let svg = document.createElementNS("http://www.w3.org/2000/svg","svg"); 
        svg.id = "lines";
        svg.style="position: absolute; height:100%; width:100%";

        let path = document.createElementNS("http://www.w3.org/2000/svg","path");

        path.id = "new_path";
        path.setAttribute("fill","none");
        path.setAttribute("stroke","#ddd");
        path.setAttribute("stroke-width","6");
        path.setAttribute("stroke-dasharray","10,6")
        svg.appendChild(path);

        this.svg = svg;
        return svg;
      }

      addNode(node){
        this.canva.appendChild(node);
      }

      draw(id){
        let canva = document.createElement("div");
        canva.className = "canva";
        canva.id = "canva";

        canva.appendChild(this.setupSvg())

        document.getElementById("tree").appendChild(canva);
        this.canva = canva;
      }
    
}
