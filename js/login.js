document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
  
      // Static list of users and passwords
      var users = [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" },
        { username: "user3", password: "password3" }
      ];
  
      // Check if the entered username and password match any user in the list
      for (var i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
          loginForm.submit(); // Proceed to home.html
          return;
        }
      }
  
      alert("Invalid username or password.");
    });
  });
  