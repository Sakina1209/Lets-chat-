const firebaseConfig = {
    apiKey: "AIzaSyBmlsIovXj5VwPO6jbIn3v7yEa3RKY3tkA",
    authDomain: "letschat23-7abe1.firebaseapp.com",
    databaseURL: "https://letschat23-7abe1-default-rtdb.firebaseio.com",
    projectId: "letschat23-7abe1",
    storageBucket: "letschat23-7abe1.appspot.com",
    messagingSenderId: "299747522475",
    appId: "1:299747522475:web:9ec042de9ca72d9eb5c4ee"
  };

  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);
    window.location = "lc_room.html";
}