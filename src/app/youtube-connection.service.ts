import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class YouTubeConnectionService {
  constructor(private httpClient: HttpClient) { }

  private apiKey = environment.youtubeApiKey;

  getVideosBySearch(query: string, maxResults: number = 10): any {
    const apiUrl = "https://www.googleapis.com/youtube/v3/search";
    const params = new HttpParams()
      .set("key", this.apiKey)
      .set("q", query)
      .set("part", "snippet")
      .set("maxResults", maxResults.toString());

    const options = {
      params: params,
    };

    return this.httpClient.get(apiUrl, options);
  }

  getPlaylistsByUser(username): any {
    const apiUrl = "https://www.googleapis.com/youtube/v3/playlists";
    const params = new HttpParams()
      .set("key", this.apiKey)
      .set("part", "snippet")
      .set("maxResults", '12')
      .set("channelId", username); // Use the channelId of the authenticated user

    const options = {
      params: params,
    };

    return this.httpClient.get(apiUrl, options);
  }

  getVideoDetails(videoId: string): any {
    const apiUrl = "https://www.googleapis.com/youtube/v3/videos";
    const params = new HttpParams()
      .set("key", this.apiKey)
      .set("id", videoId)
      .set("part", "snippet");

    const options = {
      params: params,
    };

    return this.httpClient.get(apiUrl, options);
  }

  // createPlaylist(title: string, description: string): any {
  //   const apiUrl = "https://www.googleapis.com/youtube/v3/playlists";
  //   const requestBody = {
  //     snippet: {
  //       title: title,
  //       description: description,
  //     },
  //   };

  //   const options = {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`, // Replace with the actual access token
  //     }),
  //   };

  //   return this.httpClient.post(apiUrl, requestBody, options);


}
