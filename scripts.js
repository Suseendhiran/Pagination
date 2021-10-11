let datas;
function changePage(i) {
  console.log("clicked", i);
  console.log(datas);
}
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let tableBody = document.getElementById("tableBody");
    console.log(data);
    datas = data;
    let itemsPerPage = 10;
    let noOfPages = data.length / itemsPerPage;
    let buttonContainer = document.getElementById("pageNumbers");
    for (let i = 0; i < noOfPages; i++) {
      let button = document.createElement("button");
      let textNode = document.createTextNode(i + 1);
      button.appendChild(textNode);
      buttonContainer.appendChild(button);
      document.getElementsByTagName("BUTTON")[i].onclick = function () {
        let startIndex = noOfPages * i;
        let endIndex = noOfPages * (i + 1);
        console.log(startIndex, endIndex);
        let arr = data.slice(startIndex, endIndex);
        let tableBody = document.getElementById("tableBody");
        tableBody.innerHTML = "";

        //console.log(rowNode, arr);
        for (let j = 0; j < arr.length; j++) {
          let keys = Object.keys(arr[j]);
          //console.log(keys);
          let rowNode = document.createElement("tr");
          for (let k = 0; k < keys.length; k++) {
            let dataNode = document.createElement("td");
            let dataText = document.createTextNode(arr[j][keys[k]]);
            dataNode.appendChild(dataText);
            rowNode.appendChild(dataNode);
          }
          tableBody.appendChild(rowNode);
        }
      };
    }
  });
