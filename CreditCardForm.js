document.getElementById('cc-form').addEventListener('submit', event => {
  event.preventDefault()
  console.log(event.target.fullName.value)
})