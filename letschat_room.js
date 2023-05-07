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

 user_name = localStorage.getItem("user_name");
 document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname", room_name);
        
            window.location = "lcroom2.html";
      }

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Room_name" , name);
      window.location = "lcroom2.html";
}

 function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    }