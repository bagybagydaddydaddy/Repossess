document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);

  fetch('https://formsubmit.co/ajax/35335f85b78481ed99194e4cd6d59d0a', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    location.reload(); // full page refresh
  })
  .catch(error => {
    console.log(error);
    alert('Something went wrong, please try again.');
  });
});