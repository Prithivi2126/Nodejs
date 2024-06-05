

// Function to simulate user login
function loginUser(username, password) {
    console.log("Attempting to log in user:", username);
  
    if (!username || !password) {
      console.warn("Username or password is missing.");
      return;
    }
  
    // Simulate a user database lookup
    const userDatabase = {
      "user1": "password123",
      "user2": "mysecurepassword"
    };
  
    if (!userDatabase[username]) {
      console.error("User not found:", username);
      return;
    }
  
    if (userDatabase[username] !== password) {
      console.error("Invalid password for user:", username);
      return;
    }
  
    console.log("User logged in successfully:", username);
  }
  
 
  loginUser("user1", "password123");  
  loginUser("user3", "password123");  
  loginUser("user2", "wrongpassword"); 
  loginUser("", "password123");      
  