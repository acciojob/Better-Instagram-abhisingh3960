const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('dragstart', dragStart); 
  image.addEventListener('dragover', dragOver);   
  image.addEventListener('drop', drop);          
});

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.innerText); 
}


function dragOver(event) {
  event.preventDefault(); 
}
function drop(event) {
  event.preventDefault(); 
  const draggedText = event.dataTransfer.getData('text'); 

	const targetText = event.target.innerText;
     event.target.innerText = draggedText;

	const draggedElement = [...images].find(img => img.innerText === draggedText);
    draggedElement.innerText = targetText;
}
