import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongExporterComponent } from './song-exporter.component';

describe('SongExporterComponent', () => {
  let component: SongExporterComponent;
  let fixture: ComponentFixture<SongExporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongExporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongExporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
