// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyBi2drfUFERm8h7gIvIhH7VHjUNb979pyY",
    authDomain: "project-fcde2.firebaseapp.com",
    databaseURL: "https://project-fcde2-default-rtdb.firebaseio.com",
    projectId: "project-fcde2",
    storageBucket: "project-fcde2.appspot.com",
    messagingSenderId: "230561338885",
    appId: "1:230561338885:web:c332cb7a50585ad0c52e6c",
    measurementId: "G-7MBFZ7F6LS"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
 
}




