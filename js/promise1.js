const resultElement = document.getElementById("result");
const receive = (data) => {
    for (let i=0; i<data.length;i++){

        let titleElement = document.createElement("h3");
        titleElement.textContent=data[i].title;
        resultElement.appendChild(titleElement)

        let bodyElement = document.createElement("h5");
        bodyElement.textContent=data[i].body;
        resultElement.appendChild(bodyElement);
        
        let hrline = document.createElement("hr")
        resultElement.append(hrline)

    }
}

const getData = () => {
    const url=("https://jsonplaceholder.typicode.com/posts")
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        receive(data);
        console.log(data);
    })
    .catch((err)=>{
        console.log(err)
    })
}
function getPosts(){
    getData()

}
