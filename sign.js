function toggleForm() {
    var authForm = document.getElementById("auth-form");
    var toggleBtn = document.getElementById("toggle-btn");
    var toggleLink = document.getElementById("toggle-link");

    if (authForm.classList.contains("sign-in")) {
        authForm.classList.remove("sign-in");
        authForm.classList.add("sign-up");
        toggleBtn.textContent = "Sign Up";
        toggleLink.innerHTML = 'Already have an account? <a href="#" onclick="toggleForm()">Sign In</a>';
        document.getElementById("username").style.display = "block";
        
    } else {
        authForm.classList.remove("sign-up");
        authForm.classList.add("sign-in");
        toggleBtn.textContent = "Sign In";
        toggleLink.innerHTML = 'Don\'t have an account? <a href="#" onclick="toggleForm()">Sign Up</a>';
        document.getElementById("username").style.display = "none";
    }
}
function redirectToSignUp() {
    // You can change "signup.html" to the desired URL for the sign-up page
    window.location.href = "user.html";
}
function signIn() {
    // Simulating user sign-in and storing a token in localStorage
    localStorage.setItem('userToken', 'someAuthToken');
    window.location.href = 'home.html'; // Redirect to home page after signing in
}

// Simulating user authentication
const isUserSignedIn = localStorage.getItem('userToken') !== null;

// Redirect to home page if the user is signed in
if (isUserSignedIn) {
    document.getElementById('homeLink').href = 'home.html'; // Set the link to your home page
    window.location.href = 'home.html'; // Redirect to home page
}
function toggleAnswer(id) {
    const answer = document.getElementById(id);
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}