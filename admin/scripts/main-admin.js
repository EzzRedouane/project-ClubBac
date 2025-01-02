function handleFormSubmit(event){
  event.preventDefault();
}

function pressEnter(event){
  if(event.key === 'Enter') {
    event.preventDefault();
    clickButton(event);
  }
}

function clickButton(){
  const parent = event.target.closest('.dynamic-section');
  const list = parent.querySelector('.js-list');
  const userInput = parent.querySelector('.js-inp');
  const input = userInput.value.trim();
  
  if(input){
    const listItem = document.createElement('li');
    listItem.textContent = input;


    const remove = document.createElement('i');
    remove.className = 'bx bx-x';
    remove.onclick = () =>
    listItem.remove();

    listItem.appendChild(remove)

    
    list.appendChild(listItem);
    userInput.value = '';
  }

  

}