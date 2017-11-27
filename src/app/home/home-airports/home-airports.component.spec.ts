import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAirportsComponent } from './home-airports.component';

describe('HomeAirportsComponent', () => {
  let component: HomeAirportsComponent;
  let fixture: ComponentFixture<HomeAirportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAirportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAirportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
