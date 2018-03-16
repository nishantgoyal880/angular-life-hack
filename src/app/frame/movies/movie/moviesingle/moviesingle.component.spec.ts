import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesingleComponent } from './moviesingle.component';

describe('MoviesingleComponent', () => {
  let component: MoviesingleComponent;
  let fixture: ComponentFixture<MoviesingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
