import { useEffect, useState, useReducer } from "react";
import { db } from "../firebase/config";
import { collection } from "@firebase/firestore";

const baslangicVeri = {
  belge: null,
  bekliyor: false,
  hata: null,
  basari: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useFirestore = (col) => {
  const [response, dispatch] = useReducer(firestoreReducer, baslangicVeri);
  const [iptal, setIptal] = useState(false);

  const ref = collection(db, col);

  const belgeEkle = async (belge) => {};

  const belgeSil = async (id) => {};

  useEffect(() => {
    return () => setIptal(true);
  });
  return { response, belgeEkle, belgeSil };
};
