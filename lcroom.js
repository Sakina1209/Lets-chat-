
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmlsIovXj5VwPO6jbIn3v7yEa3RKY3tkA",
    authDomain: "letschat23-7abe1.firebaseapp.com",
    databaseURL: "https://letschat23-7abe1-default-rtdb.firebaseio.com",
    projectId: "letschat23-7abe1",
    storageBucket: "letschat23-7abe1.appspot.com",
    messagingSenderId: "299747522475",
    appId: "1:299747522475:web:9ec042de9ca72d9eb5c4ee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("Roomname");
user_name = localStorage.getItem("Username");

console.log("room name "+room_name);
console.log("user name "+user_name);

function logout() {
      localStorage.removeItem("Roomname");
      localStorage.removeItem("Username");
      window.location.replace("index.html");
}
function send() {
      msg = document.getElementById("msg").value;
      console.log("Message "+msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
            dislike:0
      });
      document.getElementById("msg").value = "";
}