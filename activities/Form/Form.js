document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const state = document.getElementById("state").value;

    if (!firstName || !lastName) {
        alert("First name and last name are required!");
        return;
    }
    if (!age || age < 18) {
        alert("You must be 18 years or older to submit this form.");
        return;
    }
    if (!state) {
        alert("Please select a state.");
        return;
    }

    const formData = {
        firstName: firstName,
        lastName: lastName,
        password: document.getElementById('pass').value,
        age:age,
        phone: document.getElementById('phone').value,
        state: state,
        comments: document.getElementById('comments').value
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                document.getElementById('message').innerHTML = response.message || "Form submitted successfully!";
            } else {
                alert('Error submitting form.');
            }
        }
    };

    xhr.send(JSON.stringify(formData));
    console.log("Submitted data:", formData);
});