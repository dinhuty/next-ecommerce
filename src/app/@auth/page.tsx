interface PostResp {
  data: any[];
}
export default function Page() {
  // const posts: PostResp = await fetch(
  //   "https://tenders.guru/api/hu/tenders"
  // ).then((res) => res.json());
  return (
    <div className="flex flex-col gap-2">
      {/* {posts.data.map((post) => {
        return (
          <div key={post.id} className="flex flex-row gap-4">
            <h2 className="text-blue-400">{post.id}</h2>
            <p>{post.title}</p>
          </div>
        );
      })} */}
    </div>
  );
}
