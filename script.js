document.getElementById('change-text').addEventListener('click', function() {
    document.getElementById('main-title').textContent = 'You changed the title!';
  });
  
  document.getElementById('change-style').addEventListener('click', function() {
    document.getElementById('description').style.color = 'blue';
    document.getElementById('description').style.fontSize = '1.5em';
  });
  
  document.getElementById('add-element').addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = '✨ New dynamically added paragraph!';
    newParagraph.id = 'new-paragraph';
    document.body.appendChild(newParagraph);
  });
  
  document.getElementById('remove-element').addEventListener('click', function() {
    const newParagraph = document.getElementById('new-paragraph');
    if (newParagraph) {
      newParagraph.remove();
    } else {
      alert('No element to remove!');
    }
  });
  