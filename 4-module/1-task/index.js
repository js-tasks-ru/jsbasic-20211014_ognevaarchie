function makeFriendsList(friends) {
  let ulElement = document.createElement('ul');
  for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    let liElement = ulElement.appendChild(document.createElement('li'));
    liElement.textContent = `${element.firstName} ${element.lastName}`
  }
  return ulElement
 
}
