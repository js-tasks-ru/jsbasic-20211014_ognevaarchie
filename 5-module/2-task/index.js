function toggleText() {
  
  let button = document.querySelector('.toggle-text-button')
  button.onclick = function() {
    if (text.hasAttribute('hidden')) {
      text.removeAttribute('hidden');

    } else {
      text.setAttribute('hidden', true);

    }
  };
}