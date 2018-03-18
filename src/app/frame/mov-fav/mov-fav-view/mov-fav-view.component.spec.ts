import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovFavViewComponent } from './mov-fav-view.component';

describe('MovFavViewComponent', () => {
  let component: MovFavViewComponent;
  let fixture: ComponentFixture<MovFavViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovFavViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovFavViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
