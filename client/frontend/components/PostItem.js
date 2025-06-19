export default function PostItem({ post }) {
  return (
    <div className="border p-4 rounded mb-4 shadow">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
      <p className="text-sm text-gray-500">Posted by User {post.userId}</p>
    </div>
  );
}
