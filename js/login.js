document.addEventListener("DOMContentLoaded", function() {
  var loginForm = document.getElementById("loginForm");
<<<<<<< HEAD
  
usernameInput.addEventListener('input', checkCredentials);
passwordInput.addEventListener('input', checkCredentials);
  usernameInput.addEventListener('input', checkCredentials);
passwordInput.addEventListener('input', checkCredentials);
=======
>>>>>>> 589f96e1cbbba40fc2f7ddfedc61c88d881c0bb7
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Static list of users and passwords
    var users = [
      { username: "admin1", password: "password1" },
      { username: "admin2", password: "password2" },
      { username: "admin3", password: "password3" },
      { username: "user1", password: "userPass1"}
    ];

    // Check if the entered username and password match any user in the list
<<<<<<< HEAD

    var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');


function checkCredentials() {
  var username = usernameInput.value;
  var password = passwordInput.value;
  
  for (var i = 0; i < users.length; i++) {
    if (username === users[i].username && password === users[i].password) {
      if (username === "user1" && password === "userPass1") {
        window.location.href = "userPanel.html"; // Redirect to userPanel.html
      } else {
        loginForm.submit(); // Proceed to home.html
      }
      return;
    }
  }alert("Invalid username or password.");
}








    
  });
  function checkCredentials() {
    var username = usernameInput.value;
    var password = passwordInput.value;
    
=======
>>>>>>> 589f96e1cbbba40fc2f7ddfedc61c88d881c0bb7
    for (var i = 0; i < users.length; i++) {
      if (username === users[i].username && password === users[i].password) {
        if (username === "user1" && password === "userPass1") {
          window.location.href = "userPanel.html"; // Redirect to userPanel.html
        } else {
          loginForm.submit(); // Proceed to home.html
        }
        return;
      }
<<<<<<< HEAD
    }alert("Invalid username or password.");
  }
=======
    }

    alert("Invalid username or password.");
  });
>>>>>>> 589f96e1cbbba40fc2f7ddfedc61c88d881c0bb7
});

  