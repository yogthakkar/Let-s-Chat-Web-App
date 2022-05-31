var firebaseConfig = {
    apiKey: "AIzaSyBskVDVoZIvW3VduduA1FUaex6BMPttJ0Q",
    authDomain: "lcwa-52b55.firebaseapp.com",
    databaseURL: "https://lcwa-52b55-default-rtdb.firebaseio.com",
    projectId: "lcwa-52b55",
    storageBucket: "lcwa-52b55.appspot.com",
    messagingSenderId: "29590034704",
    appId: "1:29590034704:web:edd653e03a58bda73b6d95"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

var welcome = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + welcome + "!";

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id);'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
}