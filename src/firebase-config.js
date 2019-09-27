const Rebase = require('re-base')
const firebase = require('firebase')

    const FirebaseConfig = {
        apiKey: "AIzaSyB4_KCuLzEzMoztZFAJuUVcFo0Wx418680",
        authDomain: "xumes-portfolio-ecace.firebaseapp.com",
        databaseURL: "https://xumes-portfolio-ecace.firebaseio.com",
        projectId: "xumes-portfolio-ecace",
        storageBucket: "xumes-portfolio-ecace.appspot.com",
        messagingSenderId: "374835949239",
        appId: "1:374835949239:web:2a14374dcd4c18d8e52732"
      }
      // Initialize Firebase

      const app = firebase.initializeApp(FirebaseConfig)
      const config = Rebase.createClass(app.database())

      export const storage = app.storage()
      export const auth = app.auth()

      export default config