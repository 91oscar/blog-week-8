import { sql } from "@vercel/postgres";

export default async function Home() {
  const posts = await sql`
    SELECT * FROM posts;
  `;

  return (
    <div>
      <ul>
        {posts.rows.map((post) => (
          <li>ID: {post.id}
            Title: {post.title}
            Content: {post.content}</li>
        ))}
      </ul>
    </div>
  );
}
