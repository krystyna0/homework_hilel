
const getData = async () => {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    console.log('answer from god');
    return responce.json();
}

const data = getData()
    .then(data => data.filter(item => item["userId"] === 1))
    .then(data => console.log(data))

console.log(data)
