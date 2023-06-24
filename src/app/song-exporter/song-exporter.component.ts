import { Component, OnInit } from '@angular/core';
import { SpotifyConnectionService } from '../spotify-connection.service';

@Component({
  selector: 'app-song-exporter',
  templateUrl: './song-exporter.component.html',
  styleUrls: ['./song-exporter.component.scss']
})
export class SongExporterComponent implements OnInit {
  spotifyPlaylists: []
  chaveSpotify: ''
  spotifyPlaylistSelecionada: []
  constructor(
    private spotifyService: SpotifyConnectionService
  ) { }

  ngOnInit() {


  }

  conectarEListarSpotify() {
    this.spotifyService.getListaPlalist().subscribe((response: any) => {
      this.spotifyPlaylists = response.items
    })
  }
  listarPlaylist(playlistId) {
    this.spotifyService.getPlaylistEspecifica(playlistId).subscribe((response: any) => {
      this.spotifyPlaylistSelecionada = response.items
    })
  }

}
