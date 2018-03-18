import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovFavComponent } from './mov-fav.component';

describe('MovFavComponent', () => {
  let component: MovFavComponent;
  let fixture: ComponentFixture<MovFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
