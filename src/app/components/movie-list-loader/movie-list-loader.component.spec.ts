import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListLoaderComponent } from './movie-list-loader.component';

describe('MovieListLoaderComponent', () => {
  let component: MovieListLoaderComponent;
  let fixture: ComponentFixture<MovieListLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListLoaderComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
