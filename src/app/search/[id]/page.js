
import { sql } from "@vercel/postgres";

export default async function PostPage({ params }) {
    const post = await sql`SELECT * FROM posts WHERE id = ${params.id} `;
    console.log(post)



    if (!post) { // doesn't work I don't know the reason
        return (
            <div>
                <h1>Don't find the post</h1>
            </div>
        );
    }
    return (
        <div>
            <ul>
                {post.rows.map((post) => (
                    <li key={post.id}>
                        ID: {post.id}
                        Title: {post.title}
                        Content: {post.content}
                    </li>
                ))}
            </ul>
        </div>
    );

}




