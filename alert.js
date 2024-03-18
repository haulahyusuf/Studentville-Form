document.getElementById("registerBtn").addEventListener("click", function() {
    // Get the values from the form fields
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var telephone = document.getElementById("telephone").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector("input[name='gender']:checked").value;
    var course = document.getElementById("course").value;

    // Perform validation (you can add your own validation logic here)

    // Display a confirmation message
    alert("Thank you, " + name + ", for registering! We'll keep in touch.");

    // Perform additional action based on the selected course
    var selectedCourse = document.getElementById("course").value;
    alert("You selected: " + selectedCourse); // For demonstration, you can replace this with any desired functionality
});
