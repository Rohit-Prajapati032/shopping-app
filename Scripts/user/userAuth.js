// this file will do the login with firebase oauth gmail
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
export const loginWithGoogle = async () => {


    const provider = new GoogleAuthProvider(); // we want to use google provider

    try {
        const auth = getAuth(); // We want to auth service
        const result = await signInWithPopup(auth, provider);

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // console.log('Token is ', token);
        // The signed-in user info.
        const user = result.user;
        const { displayName, email, photoURL } = user;
        // console.log('User Info ', user);
        return { displayName, email, photoURL };

    }
    catch (err) {
        console.log('Login with Gmail Fails ', err);
    }
}



export const singOut = async () => {
    const auth = getAuth();
    await signOut(auth).then((res) => {
        // Sign-out successful.
        console.log("singOut  successfully", res);
    }).catch((error) => {
        // An error happened.
        console.log("error", error);

    });
}