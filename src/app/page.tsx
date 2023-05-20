import ThumbnailList from "@/components/ThumbnailList";
import { type Thumbnail } from "@/components/ThumbnailList";

export default async function RootPage() {
  const videoReq = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${process.env.API_KEY}&part=snippet&id=${process.env.videoId}`
  );
  const videoRes = await videoReq.json();
  const videoThumbnail: Thumbnail = videoRes?.items[0]?.snippet?.thumbnails;

  return (
    <main>
      <ThumbnailList thumbnail={videoThumbnail} />
    </main>
  );
}
