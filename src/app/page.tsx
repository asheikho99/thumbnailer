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
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${process.env.API_KEY}&part=snippet&id=${search}`,
    );
    const videoData: VideosList = await res.json();
    videoThumbnails = videoData.items[0].snippet.thumbnails;
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
