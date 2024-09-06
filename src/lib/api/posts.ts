import { VulDBPost } from "@/types/post";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  limit,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { revalidatePath } from "next/cache";
import db from "../../../firebaseConfig";

/**
 * Firestore에서 모든 post를 가져옵니다.
 * @returns Promise<VulDBPost[]>
 */
export async function getAllPosts(): Promise<VulDBPost[]> {
  try {
    const postsCollection = collection(db, "posts");
    const postsSnapshot = await getDocs(postsCollection);

    if (postsSnapshot.empty) {
      return [];
    }

    const posts: VulDBPost[] = [];
    postsSnapshot.forEach((docSnapshot) => {
      // console.log(docSnapshot.id, " => ", docSnapshot.data());

      const post = {
        id: docSnapshot.id,
        label: docSnapshot.data().label,
        source: docSnapshot.data().source,
        page_url: docSnapshot.data().page_url,
        title: docSnapshot.data().title,
        created_at: docSnapshot.data().created_at,
        source_updated_at: docSnapshot.data().source_updated_at || null,
        source_created_at: docSnapshot.data().source_created_at,
        content: docSnapshot.data().content,
        views: docSnapshot.data().views,
      };

      posts.push(post);
    });

    return posts;
  } catch (error) {
    console.error("Error in getAllPosts:", error);
    throw new Error("Failed to get all posts.");
  }
}

/**
 * Firestore에 새로운 post를 추가합니다.
 * @returns Promise<VulDBPost>
 */
export async function addPost(newPost: VulDBPost): Promise<VulDBPost> {
  try {
    const postsCollection = collection(db, "posts");
    const newPostRef = doc(postsCollection);

    const postToSave = {
      ...newPost,
      id: newPostRef.id, // 새로운 post의 id를 자동 생성합니다.
    };

    if (newPost.source_updated_at) {
      postToSave["source_updated_at"] = newPost.source_updated_at;
    }

    await setDoc(newPostRef, postToSave);
    return postToSave;
  } catch (error) {
    console.error("Error in savePost:", error);
    throw new Error("Failed to save post.");
  }
}

/**
 * Firestore에서 post의 views를 업데이트합니다.
 */
export async function increasePostViews(postId: string): Promise<void> {
  if (!postId) {
    return;
  }
  try {
    const docRef = doc(db, "posts", postId);
    await updateDoc(docRef, { views: increment(1) });
  } catch (error) {
    console.error("Error updating post views:", error);
    throw new Error("Failed to update post views.");
  }

  revalidatePath("/posts");
  revalidatePath(`/posts/${postId}`); // 조회수가 업데이트된 post를 다시 렌더링합니다.`)
}

/**
 * Firestore에서 post를 가져옵니다.
 * @returns Promise<VulDBPost>
 */
export async function getPostById(postId: string) {
  if (!postId) {
    return null;
  }

  try {
    const docRef = doc(db, "posts", postId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting post by id:", error);
    throw new Error("Failed to get post by id.");
  }
}

/**
 * Firestore에서 post의 created_at을 기준으로 정렬된 최신 posts를 가져옵니다.
 */
export async function getLatestPosts(
  maxLimit: number = 6,
): Promise<VulDBPost[]> {
  try {
    const q = query(
      collection(db, "posts"),
      orderBy("created_at", "desc"),
      limit(maxLimit),
    );

    const querySnapshot = await getDocs(q);

    const posts: VulDBPost[] = [];
    querySnapshot.forEach((doc) => {
      const post = {
        id: doc.id,
        label: doc.data().label,
        source: doc.data().source,
        page_url: doc.data().page_url,
        title: doc.data().title,
        created_at: doc.data().created_at,
        source_updated_at: doc.data().source_updated_at || null,
        source_created_at: doc.data().source_created_at,
        content: doc.data().content,
        views: doc.data().views,
      };

      posts.push(post);
    });

    return posts;
  } catch (error) {
    console.error("Error in getLatestPosts:", error);
    throw new Error("Failed to get latest posts.");
  }
}
