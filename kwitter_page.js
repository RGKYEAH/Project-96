var firebaseConfig = {
      apiKey: "AIzaSyAoPuQ-DtO5JsbN1KxWcxr2AGAFc1bICsA",
      authDomain: "project-94-8f233.firebaseapp.com",
      databaseURL: "https://project-94-8f233-default-rtdb.firebaseio.com",
      projectId: "project-94-8f233",
      storageBucket: "project-94-8f233.appspot.com",
      messagingSenderId: "343902184744",
      appId: "1:343902184744:web:e7c4a1e13d569594069c1d"
    };
    firebase.initializeApp(firebaseConfig);
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function Send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}