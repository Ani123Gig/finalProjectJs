// Function to register a new user
function register(email, password) {
    // Retrieve registered users from local storage
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Check if the user is already registered
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert("User already exists!");
        return false; // Return false to indicate registration failure
    }

    // Add the new user to the list of registered users
    users.push({ email, password });
    localStorage.setItem("registeredUsers", JSON.stringify(users));

    alert("User registered successfully!");
    return true; // Return true to indicate successful registration
}

// Event listener for registration form submission
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the email and password input values
    const email = document.getElementById("reg_email").value;
    const password = document.getElementById("reg_password").value;

    // Attempt to register the user
    const registrationSuccessful = register(email, password);

    if (registrationSuccessful) {
        // If registration was successful, clear the form fields
        document.getElementById("registerForm").reset();
    }
});

// Function to validate sign-in credentials
function signIn(email, password) {
    // Retrieve registered users from local storage
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Check if the user exists and the password matches
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // User is registered, perform sign-in action
        alert("Sign in successful!");
        // Redirect to index.html
        window.location.href = "index.html";
        // Store the signed-in user's email prefix in sessionStorage
        sessionStorage.setItem("signedInUser", email.split('@')[0]);
    } else {
        // User is not registered or provided incorrect credentials
        alert("Invalid email or password. Please try again.");
    }
}

// Event listener for sign-in form submission
document.getElementById("signInForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the email and password input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validate sign-in credentials
    signIn(email, password);
});

// Function to update navigation bar with signed-in user's email prefix
function updateNavBar() {
    const signedInUser = sessionStorage.getItem("signedInUser");
    if (signedInUser) {
        document.getElementById("signInLabel").textContent = signedInUser;
    }
}

// Call updateNavBar function when the page loads
updateNavBar();
console.log("JavaScript file loaded successfully.");