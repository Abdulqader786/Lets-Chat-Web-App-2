var firebaseConfig = {
    apiKey: "AIzaSyABQsbyBernn6Ak6tLhuHtYSpreF5i2U-I",
    authDomain: "kwitter-app-197cb.firebaseapp.com",
    databaseURL: "https://kwitter-app-197cb-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-197cb",
    storageBucket: "kwitter-app-197cb.appspot.com",
    messagingSenderId: "29886195217",
    appId: "1:29886195217:web:207eb7d985a8a7b03173b0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome"+ user_name+"!";
