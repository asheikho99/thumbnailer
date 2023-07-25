import SearchBar from "@/components/SearchBar";
import Thumbnail from "@/components/Thumbnail";

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
    <main className="flex min-h-full flex-col">
      <div className="container space-y-4">
        <SearchBar />
        {videoThumbnails &&
          Object.entries(videoThumbnails).map((thumbnail) => {
            const title = thumbnail[0];
            const data: Thumbnail = thumbnail[1];
            return (
              <Thumbnail
                key={title}
                alt={title}
                src={data.url}
                height={data.height}
                width={data.width}
              />
            );
          })}
      </div>
    </main>
  );
}
