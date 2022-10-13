export interface CreatePostInterface {
  title: string;
  authorId: number;
}

export interface UpdatePostInterface {
  id: number;
  title: string;
  published: boolean;
}
