 

var allStudents = [];

var addtolist = () => {
  var fname = document.getElementById("fname").value;  var rNo = document.getElementById("rNo").value;
  document.getElementById("fname").value = "";




  document.getElementById("rNo").value = "";
               











  var newStudent = {
    fname,
    rNo
  }

  allStudents.push(newStudent);

  renderList();
}
 

      var renderList = () => {
  var studentCount = allStudents.length;
  var lastAdded = allStudents[studentCount - 1];

            var newListItem = document.createElement("div");
  newListItem.textContent = `Name: ${lastAdded.fname} Roll Number: ${lastAdded.rNo}`

           document.body.append(newListItem);
}