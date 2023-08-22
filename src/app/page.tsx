import SearchBar from "@/components/search-bar";
import Thumbnail from "@/components/thumbnail/thumbnail";

export default async function RootPage({
  params,
  searchParams,
}: {
  params: string;
  searchParams: string;
}) {
  const { search } = searchParams;
  let videoThumbnails;

  if (search) {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${process.env.API_KEY}&part=snippet&id=${search}`,
      );

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const videoData: VideosList = await res.json();
      const items = videoData.items;

      if (items.length == 0) throw new Error("INVALID VIDEO ID");

      videoThumbnails = videoData.items[0].snippet.thumbnails;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex min-h-full flex-col py-6">
      <div className="container mx-auto max-w-5xl space-y-4">
        <SearchBar />
        {videoThumbnails &&
          Object.entries(videoThumbnails).reverse().map((thumbnail) => {
            const title: string = thumbnail[0];
            const data: Thumbnail = thumbnail[1];
            return <Thumbnail data={data} title={title} key={title} />;
          })}
      </div>
    </main>
  );
}
