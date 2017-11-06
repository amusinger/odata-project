import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePeopleComponent } from './home-people.component';

describe('HomePeopleComponent', () => {
  let component: HomePeopleComponent;
  let fixture: ComponentFixture<HomePeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
