'use client';

import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../graphql/queries';
import PostItem from '../components/PostItem';

type Post = {
  id: string;
  [key: string]: any; // Add other fields as needed
};
export default function Home() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      {data?.posts.map((post: Post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </main>
  );
}
