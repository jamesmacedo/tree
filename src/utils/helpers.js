const randomStr = (length = 10) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const checkCollisions = (movingDiv) =>{
      var found = null;
      document.querySelectorAll('.node').forEach(div => {
        if (div !== movingDiv && !isBeingDragged(div) && isWithinRadius(movingDiv, div, 400)) {
          found = div;
        }
      });
      return found;
    }

const calculateDistance = (x1, y1, x2, y2) => {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// This function checks if one div is within the radius of another div
const isWithinRadius = (div1, div2, radius) => {
      const rect1 = div1.getBoundingClientRect();
      const rect2 = div2.getBoundingClientRect();
      const centerX1 = rect1.left + rect1.width / 2;
      const centerY1 = rect1.top + rect1.height / 2;
      const centerX2 = rect2.left + rect2.width / 2;
      const centerY2 = rect2.top + rect2.height / 2;

      const distance = calculateDistance(centerX1, centerY1, centerX2, centerY2);
      return distance <= radius;    
    }

    // Função para verificar se uma div está em movimento
const isBeingDragged = (div) =>{
  return div === document.querySelector('.dragging');
}

export {
  randomStr,checkCollisions, calculateDistance, isWithinRadius,isBeingDragged 
}

