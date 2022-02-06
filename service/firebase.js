import { initializeApp } from "firebase/app"
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, collection, addDoc, setDoc, getDocs, doc, query } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCk1EmwbTVISXuLE6nnicnj6_F-zEV54wY",
    authDomain: "evoverse-assistant.firebaseapp.com",
    projectId: "evoverse-assistant",
    storageBucket: "evoverse-assistant.appspot.com",
    messagingSenderId: "11421700620",
    appId: "1:11421700620:web:8c9a57f6cb75688434d429",
    measurementId: "G-HTKQ1G08VP"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider();

export {app, auth, provider, db}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    googleLogar :async () => {
    let result = signInWithPopup(auth, provider)
    .then( async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log(result)
        const credential = GoogleAuthProvider.credentialFromResult(result); 
        const token = credential.accessToken;
        return result
    }).catch((error) => {
        return result
    });
    return result
    },

    googleDeslogar: async () => {
        let result = signOut(auth).then(() => {
            // Sign-out successful.
            return true
          }).catch((error) => {
            // An error happened.
            return error
        });
        return result
    },

    getDoc: async () => {
        let q =query(collection(db, "users"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
        })
        return querySnapshot
    },

    saveUser: async (user) => {
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name: user.displayName,
            photo: user.photoURL,
            email: user.email
        })
        await setDoc(doc(db, `users/${user.uid}/data/`, "podlist"), {
            pods: [{}]
        })
        await setDoc(doc(db, `users/${user.uid}/data/`, "diary"), {
            gameepwbalance: 0,
            walletepwbalance: 0,
            totalepwgainhistory: [0],
            totalusdgainhistory:[0],
            farmedepw: [0],
        })
        /*await setDoc(doc(db, `users/${user.uid}/data/`, "podlist"), {
            pods: [
                {
                    id: 1131,
                    rarity: "comum",
                    hashpower: 2.15,
                    level: 1,
                },
                {
                    id: 1132,
                    rarity: "comum",
                    hashpower: 3.3,
                    level: 1,
                },
                {
                    id: 1134,
                    rarity: "rare",
                    hashpower: 9.40,
                    level: 1,
                },
                {
                    id: 1137,
                    rarity: "epic",
                    hashpower: 31,
                    level: 1,
                },
            ]
        })*/
    }
}