import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaPlaylistComponent } from './lista-playlist/lista-playlist.component';
import { TrackSongComponent } from './track-song/track-song.component';
import { ListTracksComponent } from './list-tracks/list-tracks.component';
import { ListPlaylistComponent } from './list-playlist/list-playlist.component';
import { SongComparerComponent } from './song-comparer/song-comparer.component';
import { SongExporterComponent } from './song-exporter/song-exporter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaPlaylistComponent,
    TrackSongComponent,
    ListTracksComponent,
    ListPlaylistComponent,
    SongComparerComponent,
    SongExporterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
