"use server";

import { Thumbnail, thumbnails } from "@/components/ThumbnailList";
import { revalidatePath } from "next/cache";

export async function fetchVideoData(formData: FormData) {

  const videoId = formData.get("videoId") as string;
  if(videoId.length != 0){
    const videoReq = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${process.env.API_KEY}&part=snippet&id=${videoId}`
    );
    const videoRes = await videoReq.json();
    const videoThumbnail: Thumbnail = videoRes?.items[0]?.snippet?.thumbnails;

    Object.entries(videoThumbnail).map(thumbnail => {
      thumbnails.push(thumbnail[1])
    })

    revalidatePath("/");
  }
  
}
