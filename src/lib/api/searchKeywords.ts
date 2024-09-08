import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import db from "../../../firebaseConfig";

export type SearchKeyword = {
  keyword: string;
  searchCounts: number;
};

export async function fetchSearchKeywords() {
  const q = query(
    collection(db, "searchKeywords"),
    orderBy("searchCounts", "desc"),
    limit(10),
  );
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return [];
  }

  const topSearchKeywords: SearchKeyword[] = [];

  querySnapshot.forEach((doc) => {
    topSearchKeywords.push({
      keyword: doc.id,
      searchCounts: doc.data()["searchCounts"],
    });
  });

  return topSearchKeywords;
}
