import { VulDBPost, VulDBPostWithChip } from "@/types/post";
import {
  collection,
  doc,
  getDocs,
  increment,
  limit,
  orderBy,
  query,
  startAfter,
  updateDoc,
} from "firebase/firestore";
import db from "../../../firebaseConfig";
import { getUserPinnedPosts } from "./users";

/**
 * 조회수가 높은 상위 게시물 ID를 가져옵니다.
 * @returns Promise<string[]>
 */
export async function getTopHotPostIds(): Promise<string[]> {
  const postsCollection = collection(db, "posts");
  const hotPostsQuery = query(
    postsCollection,
    orderBy("views", "desc"),
    limit(10),
  );

  const snapshot = await getDocs(hotPostsQuery);
  const hotPostIds: string[] = [];

  snapshot.forEach((docSnapshot) => {
    hotPostIds.push(docSnapshot.id);
  });

  return hotPostIds;
}

/**
 * Firestore에서 페이지 단위로 post를 가져옵니다.
 * @returns Promise<VulDBPost[]>
 */
export async function getPaginatedPosts(
  pageSize: number,
  lastVisiblePost: VulDBPost | null = null,
  userId: number | null = null,
): Promise<{ posts: VulDBPost[]; lastVisiblePost: VulDBPost | null }> {
  try {
    const postsCollection = collection(db, "posts");
    let postsQuery;

    if (lastVisiblePost) {
      postsQuery = query(
        postsCollection,
        orderBy("created_at", "desc"),
        startAfter(lastVisiblePost.created_at),
        limit(pageSize),
      );
    } else {
      postsQuery = query(
        postsCollection,
        orderBy("created_at", "desc"),
        limit(pageSize),
      );
    }

    const postsSnapshot = await getDocs(postsQuery);
    if (postsSnapshot.empty) {
      return { posts: [], lastVisiblePost: null };
    }

    let userPinnedPosts: string[] = [];
    if (userId) {
      userPinnedPosts = await getUserPinnedPosts(userId);
    }

    const posts: VulDBPostWithChip[] = [];
    let lastPost: VulDBPostWithChip | null = null;

    postsSnapshot.forEach((docSnapshot) => {
      const post: VulDBPostWithChip = {
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
        chip: "",
        isScrapped: userPinnedPosts.includes(docSnapshot.id),
      };
      posts.push(post);
      lastPost = post;
    });

    return { posts, lastVisiblePost: lastPost };
  } catch (error) {
    console.error("Error fetching paginated posts:", error);
    throw new Error("Failed to get paginated posts.");
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
}
