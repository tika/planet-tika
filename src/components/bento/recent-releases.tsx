import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export type SpotifyTrack = {
  id: string;
  name: string;
  artists: Array<{ id: string; name: string }>;
  album: {
    id: string;
    name: string;
    images: Array<{ url: string }>;
    release_date: string;
  };
  preview_url: string | null;
  external_urls: {
    spotify: string;
  };
};

async function getAccessToken(tokenUrl: string, auth: string) {
  const tokenResponse = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      Authorization: auth,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-cache",
  });

  const tokenData = await tokenResponse.json();
  return tokenData.access_token;
}

async function getRecentTracks(
  artistId: string,
  accessToken: string
): Promise<{ tracks: SpotifyTrack[] }> {
  return await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=GB`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((it) => it.json());
}

export async function RecentReleases() {
  const clientId = "fe4fa5c7fcf349448949ef8547e8e951";

  const tokenUrl = "https://accounts.spotify.com/api/token";
  const auth =
    "Basic " +
    Buffer.from(`${clientId}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString(
      "base64"
    );

  const accessToken = await getAccessToken(tokenUrl, auth);

  // Myrin
  const artistId = "4SMydy6Ruwqh17RNllSxnZ";

  const tracks: SpotifyTrack[] = (
    await getRecentTracks(artistId, accessToken)
  ).tracks.slice(0, 3);

  return (
    <>
      <div className="flex justify-between items-center border-b mb-2 pb-2">
        <h1 className="text-lg">Recent Releases</h1>
        <Link
          href="https://open.spotify.com/artist/4SMydy6Ruwqh17RNllSxnZ?si=zLuPNCPmRJ2RQ4a0M9cU5Q"
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "icon",
            })
          )}
        >
          <ExternalLink className="w-6 h-6" />
        </Link>
      </div>
      <div className="h-72 w-full flex flex-col justify-between">
        {tracks.map((it) => (
          <div key={it.id} className="flex items-center gap-4">
            <Image
              src={it.album.images[0].url}
              alt="Album cover"
              width={80}
              height={80}
              className="overflow-hidden rounded-3xl"
            />
            <div>
              <h1>{it.name}</h1>
              <p className="text-muted-foreground">
                {it.artists.map((it) => it.name).join(", ")}
              </p>
              <p className="font-bold text-muted-foreground text-sm">
                {it.album.release_date.replaceAll("-", ".")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
