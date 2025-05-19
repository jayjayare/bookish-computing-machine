document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission
  document.getElementById('nameInput').value = '';
  document.getElementById('viewInput').value = '';
  alert('Message sent!');
});