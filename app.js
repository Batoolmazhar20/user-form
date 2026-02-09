// function previewDate() {
// var email = document.getElementById("email").value;
// var name = document.getElementById("name").value;
// var fname = document.getElementById("fname").value;
// var cnic = document.getElementById("cnic").value;
// var age = document.getElementById("age").value;

// var fullName = name + " " + fname;


// document.getElementById("pemail").innerHTML = "Email: " + email;
// document.getElementById("pname").innerHTML = "Name: " + fullName;
// document.getElementById("pcnic").innerHTML = "CNIC: " + cnic;
// document.getElementById("page").innerHTML = "Age: " + age;

// document.getElementById("card")
// }

// function submiForm(){
//     document.getElementById("message").innerHTML = "Form submitted successfully!";
// }


function limitCNIC() {
    const cnic = document.getElementById("cnic").value;

    if (cnic.length === 13) {
        alert("Valid CNIC");
    } else {
        alert("CNIC must be 13 digits");
    }
}

function previewData() {
    document.getElementById("pname").innerText =
        "Name: " + document.getElementById("name").value + " " +
        document.getElementById("fname").value;

    document.getElementById("page").innerText =
        "Age: " + document.getElementById("age").value;

    document.getElementById("pemail").innerText =
        "Email: " + document.getElementById("email").value;

    document.getElementById("pcnic").innerText =
        "CNIC: " + document.getElementById("cnic").value;
}

function submitForm() {
    document.getElementById("message").innerText =
        "Form submitted successfully!";
}
