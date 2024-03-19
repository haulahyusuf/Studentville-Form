document.getElementById("registerBtn").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var telephone = document.getElementById("telephone").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector("input[name='gender']:checked").value;
    var course = document.getElementById("course").value;

    alert("Thank you, " + name + ", for registering! We'll keep in touch.");

    var selectedCourse = document.getElementById("course").value;
    alert("You selected: " + selectedCourse);
});