// Function to handle login
function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Basic validation check
    if (!email || !password) {
        message.style.color = "red";
        message.textContent = "Please enter both email and password.";
        return;
    }

    // Mock login (you can replace this with actual authentication logic)
    if (email === "user@example.com" && password === "password123") {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Incorrect email or password.";
    }
}
