import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSComponent } from './news-s.component';

describe('NewsSComponent', () => {
  let component: NewsSComponent;
  let fixture: ComponentFixture<NewsSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
