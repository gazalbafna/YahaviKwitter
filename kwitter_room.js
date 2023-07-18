
//ADD YOUR FIREBASE LINKS HERE
//YOUR FIREBASE LINKS
var firebaseConfig = { apiKey: "AIzaSyAkxwX5Qb-Sjtn8U9fdN8qs2QZ49_sHHsM", authDomain: "kwitter-e5bec.firebaseapp.com", databaseURL:"https://kwitter-e5bec-default-rtdb.firebaseio.com",projectId: "kwitter-e5bec", storageBucket: "kwitter-e5bec.appspot.com", messagingSenderId: "619483614346", appId: "1:619483614346:web:d666af6d84b58a0361f173", measurementId: "G-1P50YNCPP0" }; 
// Initialize Firebase 
firebase.initializeApp(firebaseConfig); 

    // Codes for class - 95

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "WELCOME" + user_name + "!";

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding room name"
          });

          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html"
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       //Start code
     
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;

       //End code
      });});}
getData();

// Codes for class - 95

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

// Codes for class - 96

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}