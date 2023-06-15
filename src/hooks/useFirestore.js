import { useEffect, useState, useReducer } from "react";
import { db } from "../firebase/config";
import { collection,addDoc,serverTimestamp,doc,deleteDoc} from "@firebase/firestore";

const baslangicVeri = {
  belge: null,
  bekliyor: false,
  hata: null,
  basari: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "BEKLIYOR":
      return {hata: null, bekliyor: true, basari:false, belge: null};
        case "BELGE_EKLENDI":
      return {hata: null, bekliyor: false, basari:true, belge: action.payload};
    case "HATA":
      return {hata: action.payload, bekliyor: false, basari:false, belge: null};
      case "BELGE_SILINDI":
      return {hata: null, bekliyor: false, basari:true, belge: null};
    default:
      return state;
  }
};

export const useFirestore = (col) => {
  const [response, dispatch] = useReducer(firestoreReducer, baslangicVeri);
  const [iptal, setIptal] = useState(false);

  const ref = collection(db, col);

  const belgeEkle = async (belge) => {
    dispatch({ type: "BEKLIYOR" });

    try {
      const olusturulmaTArihi = serverTimestamp();
      const eklenenBelge = await addDoc(ref, { ...belge, olusturulmaTArihi });
      if (!iptal) {
        dispatch({ type: "BELGE_EKLENDI", payload: eklenenBelge });
      }
    } catch (error) {
      if (!iptal) {
        dispatch({ type: "HATA", payload: error.message });
      }
  }
  }

  const belgeSil = async (id) => {;
  dispatch({ type: "BEKLIYOR" })

  try {
    let ref=doc(db,col,id);
    await deleteDoc (ref);

    if (!iptal) {
      dispatch({ type: "BELGE_SILINDI" });
    }

  } catch (error) {
    if (!iptal) {
      dispatch({ type: "HATA", payload: error.message });
    }

  }
}

  useEffect(() => {
    return () => setIptal(true);
  }, []);
  return { response, belgeEkle, belgeSil };
};
