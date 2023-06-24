import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SpotifyConnectionService {
  constructor(private httpClient: HttpClient) {
    this.getAuths().subscribe((response) => (this.accessToken = response));
  }

  private clientId = environment.spotifyClientId;
  private clientSecret = environment.spotifySecretKey;
  private accessToken: any;

  getAuths(): any {
    const authHeader = "Basic " + btoa(`${this.clientId}:${this.clientSecret}`);
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

  getListaPlalist() {
    const options = {
      headers: new HttpHeaders({
        Authorization: `${this.accessToken.token_type} ${this.accessToken.access_token}`,
      }),
    };
    return this.httpClient.get(
      `https://api.spotify.com/v1/users/22vv5v76eeixxskmlgkc344dy/playlists`,
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
