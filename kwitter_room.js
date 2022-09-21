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

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+ user_name+ "!";

  function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding_room_name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room_name "+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML+= row;
    //End code
    });});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}

function logout() {
    window.location = "index.html";
}