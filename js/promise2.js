const resultElement = document.getElementById("result");

const receive = (data) => {
  var x = document.createElement("TABLE");
  x.setAttribute("id", "myTable");
  resultElement.appendChild(x);

  var y = document.createElement("TR");
  y.setAttribute("id", "myTr");
  document.getElementById("myTable").appendChild(y);

  var NumberOfTh = document.createElement("TH");
  var number = document.createTextNode("S.NO");
  NumberOfTh.appendChild(number);
  document.getElementById("myTr").appendChild(NumberOfTh);

  
  var NumberOfTh = document.createElement("TH");
  var nameNode = document.createTextNode("Name");
  NumberOfTh.appendChild(nameNode);
  document.getElementById("myTr").appendChild(NumberOfTh);

  var NumberOfTh = document.createElement("TH");
  var emailNode = document.createTextNode("Email");
  NumberOfTh.appendChild(emailNode);
  document.getElementById("myTr").appendChild(NumberOfTh);

  var NumberOfTh = document.createElement("TH");
  var userNameNode = document.createTextNode("UserName");
  NumberOfTh.appendChild(userNameNode);
  document.getElementById("myTr").appendChild(NumberOfTh);

  var NumberOfTh = document.createElement("TH");
  var phoneNode = document.createTextNode("Phone");
  NumberOfTh.appendChild(phoneNode);
  document.getElementById("myTr").appendChild(NumberOfTh);

  var NumberOfTh = document.createElement("TH");
  var websiteNode = document.createTextNode("Website");
  NumberOfTh.appendChild(websiteNode);
  document.getElementById("myTr").appendChild(NumberOfTh);
  
  
  
    for (let i=0; i<data.length;i++){
        let trElement1=document.createElement("TR");
        document.getElementById("myTable").appendChild(trElement1);
 
        let numberNode1 = document.createElement("TD");
        let nameNode1=document.createElement("TD");
        let emailNode1 = document.createElement("TD");
        let userName1= document.createElement("TD");
        let phoneNode1=document.createElement("TD");
        let websiteNode1=document.createElement("TD");

        numberNode1.textContent=data[i].id;
        nameNode1.textContent=data[i].name;
        emailNode1.textContent=data[i].email;
        userName1.textContent=data[i].username;
        phoneNode1.textContent=data[i].phone;
        websiteNode1.textContent=data[i].website;

        trElement1.appendChild(numberNode1);
        trElement1.appendChild(nameNode1);
        trElement1.appendChild(emailNode1);
        trElement1.appendChild(userName1)
        trElement1.appendChild(phoneNode1);
        trElement1.appendChild(websiteNode1)
        
    }
}

const getData = () => {
    const url=("https://jsonplaceholder.typicode.com/users")
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
