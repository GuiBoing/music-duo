import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongComparerComponent } from './song-comparer.component';

describe('SongComparerComponent', () => {
  let component: SongComparerComponent;
  let fixture: ComponentFixture<SongComparerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongComparerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongComparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
