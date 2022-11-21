

const arrayOfRequest = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then (data => data.filter(item => item["userId"] === 1))
    .catch(console.error)

console.log(arrayOfRequest)
