function capitalizeString(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}
console.log(capitalizeString(prompt("Enter your name:")))