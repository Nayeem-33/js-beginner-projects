const taskContainer = document.querySelector("#content-container");

const taskContainer2 = document.querySelector("#content-container-2");

let inputBox = document.getElementById("input-value");

let serial = 0;

//? Adding new task When Button Clicked
document.querySelector("#task-btn").addEventListener("click", function () {
  
  // ! To prevent empty task
  if (inputBox.value !== "") {
    
    //* Updating the Serial Number
    serial++;

    //* Creating New HTML TASK Using table
    let newTr = document.createElement("tr");
    newTr.innerHTML = `
          <td>${serial}</td>
          <td>${inputBox.value}</td>
          <td><button class="btn btn-xs btn-success">DONE</button></td>
      `;

    //* Adding the Created Table in the taskContainer
    taskContainer.appendChild(newTr);

    //* Clearing The Input Box
    inputBox.value = "";

    //? Done/Delete button functionality
    newTr.childNodes[5].childNodes[0].addEventListener(
      "click",
      function (event) {
       
        //* if the button text is DONE it will run this condition
        if (event.target.innerText === "DONE") {
          event.target.parentNode.parentNode.children[1].style.textDecoration =
            "line-through";
          event.target.classList.add("btn-error");
          event.target.innerHTML = "DELETE";
          console.log(event.target.parentNode.parentNode);
        }

        //* if the button text is DELETE it will run this condition
        else if (event.target.innerText === "DELETE") {
          event.target.parentNode.parentNode.remove();
          event.target.parentNode.parentNode.children[1].style.textDecoration = 
            "none";
          event.target.classList.add("btn-info");
          event.target.classList.remove("btn-error");
          event.target.classList.remove("btn-success");
          event.target.innerHTML = "COMPLETE";
          taskContainer2.appendChild( event.target.parentNode.parentNode)
        }
      }
    );
  } else {
    alert("Write a Task");
  }
});

//? Clearing all the task with Clear all Button
document.getElementById("clear-btn").addEventListener("click", function () {
  taskContainer.innerHTML = "";
  taskContainer2.innerHTML = "";
});
