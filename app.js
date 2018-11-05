firebase.initializeApp({
    apiKey: "AIzaSyDuLoXtvdIyNdkRS4zal13w0Eo_w68mrDQ",
    authDomain: "crud-firestore-js.firebaseapp.com",
    projectId: "crud-firestore-js"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Guardando colección en base de datos
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });

// Leer documentos
//Leyendo colección de base de datos
var tabla = document.getElementById('tabla');
db.collection("users").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().first}</td>
        <td>${doc.data().last}</td>
        <td>${doc.data().born}</td>
      </tr>
      `
    });
});