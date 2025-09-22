import {db} from './config'
import {doc, getDoc, setDoc} from 'firebase/firestore'


export async function saveUsertoDb(user){
      const userRef = doc(db, "user", user.uid);
      const usersnap = await getDoc(userRef);

      if(!usersnap.exists()){
            await setDoc(userRef,{
                  uid: user.uid,
                  email: user.email,
                  name: user.displayName || "",
                  photoUrl: user.photoURL || "",
                  createdAt: new Date(),
                  amount: 0,
                  role: "user"
            });

      }
}