document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    
    if (!first || !last) {
        alert("Please provide your full name.");
        return;
    }
 

    const data = {
        firstName: first,
        lastName: last,
        age: age
    }
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = " ";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }

    };
    xhr.send(JSON.stringify(data));
    console.log(data);
    const messageDiv = document.getElementById("message");
    messageDiv.classList.remove("hidden");
    
   
    document.querySelector(".form-container").style.display = "none";


   
});



