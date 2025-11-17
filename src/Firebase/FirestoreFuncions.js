import { db, auth } from "./firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

export async function saveGameResult(level, results, totalScore) {
  const user = auth.currentUser;
  if (!user) return;

  await setDoc(
    doc(db, "users", user.uid, "games", `level${level}`),
    {
      level,
      results,
      totalScore,
      timestamp: Date.now()
    }
  );
}
