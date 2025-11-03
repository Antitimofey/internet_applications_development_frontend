import { ITunesResult } from "./itunesApi.ts";

export const SONGS_MOCK: ITunesResult = {
  resultCount: 3, 
  results: [
    {
        collectionId: 1,
        wrapperType: "track",
        artistName: "Pink Floyd",
        collectionCensoredName: "The Wall",
        trackViewUrl: "",
        artworkUrl100: "",
    },
    {
        collectionId: 2,
        wrapperType: "track",
        artistName: "Queen",
        collectionCensoredName: "A Night At The Opera",
        trackViewUrl: "",
        artworkUrl100: "",
    },
    {
        collectionId: 3,
        wrapperType: "track",
        artistName: "AC/DC",
        collectionCensoredName: "Made in Heaven",
        trackViewUrl: "",
        artworkUrl100: "",
    },
  ],
};
