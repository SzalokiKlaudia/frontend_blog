function Post({ post }) {
  return (
    <div>
      <span>{post.created_at}</span>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
