
function addingEventListener() {
  const button = document.getElementById('button')

  if(button) {
    button.addEventListener('click',function() {
      alert("i was clicked")
    });
  }
}
console.log(addingEventListener)
