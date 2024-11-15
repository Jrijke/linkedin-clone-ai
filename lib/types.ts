export interface Post {
  id: string;
  content: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  likes: number;
  comments: number;
  timestamp: string;
}