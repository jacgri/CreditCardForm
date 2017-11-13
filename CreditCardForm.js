document.getElementById('js-cc-form').addEventListener('submit', event => {
  event.preventDefault()
  console.log(event.target.fullName.value)
  console.log(event.target.city.value)
  console.log(event.target.creditCardNumber.value)
  console.log(event.target.expiryDate.value)
  console.log(event.target.securityCode.value)
})
