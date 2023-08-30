import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SpotifyConnectionService {
  constructor(private httpClient: HttpClient) {

  }

  private clientSecret = environment.spotifySecretKey;
  clientId;
  private accessToken: any;


  getAuths(clientId): any {
    this.clientId = clientId
    const authHeader = "Basic " + btoa(`${clientId}:${this.clientSecret}`);
    const body = new HttpParams().set("grant_type", "client_credentials");

    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: authHeader,
      }),
    };

    return this.httpClient.post(
      "https://accounts.spotify.com/api/token",
      body,
      options
    );
  }

  getListaPlalist(user_id) {
    let sessionData = window.sessionStorage.getItem('input') ? window.sessionStorage.getItem('input') : (window.sessionStorage.getItem('output') ? window.sessionStorage.getItem('output') : undefined)
    if (sessionData) {
      this.accessToken = JSON.parse(sessionData)['response']
    }
    const options = {
      headers: new HttpHeaders({
        Authorization: `${this.accessToken.token_type} ${this.accessToken.access_token}`,
      }),
    };
    return this.httpClient.get(
      `https://api.spotify.com/v1/users/${user_id}/playlists`,
      options
    );
  }
  getPlaylistEspecifica(playlistId) {
    const options = {
      headers: new HttpHeaders({
        Authorization: `${this.accessToken.token_type} ${this.accessToken.access_token}`,
      }),
    };
    return this.httpClient.get(

      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      options
    );
  }
}
