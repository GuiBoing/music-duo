import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ListTracksComponent } from './list-tracks/list-tracks.component';
import { SongComparerComponent } from './song-comparer/song-comparer.component';
import { SongExporterComponent } from './song-exporter/song-exporter.component';
import { FunctionSelectComponent } from './function-select/function-select.component';
import { ConnectionPageComponent } from './connection-page/connection-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListTracksComponent,
    SongComparerComponent,
    SongExporterComponent,
    FunctionSelectComponent,
    ConnectionPageComponent
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
