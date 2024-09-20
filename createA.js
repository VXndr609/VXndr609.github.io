document.getElementById("genButton").addEventListener('click', function() {
    document.getElementById("addHere").innerHTML = document.getElementById("addHere").innerHTML + "<div class='col'><div class='card shadow-sm'><img src='" + document.getElementById("link").value + "'><div class='card-body'><p class='card-text'>Hi, my name is " + document.getElementById("name").value + " and I'm " + document.getElementById("age").value + ". I'm a pred from " + document.getElementById("location").value + " and I work as a " + document.getElementById("profession").value + " at " + document.getElementById("worksAt").value + ". " + document.getElementById("statement").value + ".</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button type='button' class='btn btn-sm btn-outline-secondary' id='Xena McKenzie'data-bs-toggle='modal' data-bs-target='#staticBackdrop'>Contact!</button></div></div></div></div></div>";
    document.getElementById("codeToCopy").textContent = {
      "Photo Link": document.getElementById("link").value,
      "Name": document.getElementById("name").value,
      "Age": document.getElementById("age").value,
      "lives": document.getElementById("location").value,
      "Profession": document.getElementById("profession").value,
      "Place of Work": document.getElementById("worksAt").value,
      "Index Hook": document.getElementById("statement").value
  }
  });