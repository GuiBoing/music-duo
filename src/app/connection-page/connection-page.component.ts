import { Component, Input, OnInit } from "@angular/core";
import { SpotifyConnectionService } from "../spotify-connection.service";
import { FormControl, FormGroup } from "@angular/forms";
import { YouTubeConnectionService } from "../youtube-connection.service";

@Component({
  selector: "app-connection-page",
  templateUrl: "./connection-page.component.html",
  styleUrls: ["./connection-page.component.scss"],
})
export class ConnectionPageComponent implements OnInit {
  formGroup = new FormGroup({
    inputIdKey: new FormControl("2f45e2b817d542fa900f36647661c547"),
    outputIdKey: new FormControl(""),
    outputUser: new FormControl("UCp8qsqop-pcBmR0NkKehdeg"),
    inputUser: new FormControl("22vv5v76eeixxskmlgkc344dy"),
    outputSelectedPlaylist: new FormControl(),
    inputSelectedPlaylist: new FormControl(),
  });

  playlistSelectedId;
  listaPlaylists = {
    input: [],
    output: [],
  };
  @Input() methodData: "input" | "output";
  selectedService;
  isConected = { input: false, output: false };
  selectData(serviceName: string) {
    console.log(this.methodData, serviceName);
    this.selectedService = serviceName;
  }
  logInService() {
    let userEntry = this.formGroup.get(this.methodData + 'User');
    let idKeyEntry = this.formGroup.get(this.methodData + 'IdKey');
    let playlistEntry = this.formGroup.get(this.methodData + 'SelectedPlaylist');
    switch (this.selectedService) {
      case "spotify":
        this.spotifyService
          .getAuths(idKeyEntry.value)
          .subscribe((response) => {
            this.saveToSessionStorage(
              this.selectedService,
              this.methodData,
              response
            );
            this.spotifyService.getListaPlalist(userEntry.value).subscribe(
              (data: any) => {
                this.listaPlaylists[this.methodData] = data.items.map(playlist => {
                  return {
                    id: playlist.id,
                    name: playlist.name
                  };
                });
              },
              (error) => {
                console.error("Error fetching playlists:", error);
              }
            );
          });
        break;
      case "youtubeMusic":
        this.saveToSessionStorage(
          this.selectedService,
          this.methodData,
          { aa: 'teste' }
        );
        this.youtubeMusicService.getPlaylistsByUser(userEntry.value).subscribe(
          (data: any) => {
            this.listaPlaylists[this.methodData] = data.items.map(playlist => {
              console.log(playlist)
              return {
                id: playlist.id,
                name: playlist.snippet.title
              };
            });
          },
          (error) => {
            console.error("Error fetching playlists:", error);
          }
        );
        break;
    }
  }

  saveToSessionStorage(service: string, type: string, response: any) {
    const data = { service, response };
    window.sessionStorage.setItem(type.toString(), JSON.stringify(data));
    this.isConected[type] = true
  }

  selectPlaylist() {

  }

  constructor(private spotifyService: SpotifyConnectionService, private youtubeMusicService: YouTubeConnectionService) { }

  ngOnInit() { }
}
