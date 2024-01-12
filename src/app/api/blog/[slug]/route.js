import { connectToDb } from "@/lib/utils";


export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch post");
  }
}

export const DELETE = async (request, { params }) => {
  const { slug } = params

  try {
    connectToDb()

    await Post.deleteOne({ slug })
    return NextResponse.json("Post deleted")
  } catch (error) {
    console.log(error)
    throw new Error("failed to delete post")
  }
}