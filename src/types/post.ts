export type Comment = {
  id: string
  postId: string
  content: string
}

export type Post = {
  id: string
  title: string
  summary: string
  content: string
  comments: Comment[]
  date: Date | string
}

export type PostContent = Omit<Post, 'id' | 'comments'>

export type PostContextType = {
  post: Post
  setPost: (p: Post) => void
}
