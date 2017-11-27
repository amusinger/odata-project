import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTripsComponent } from './person-trips.component';

describe('PersonTripsComponent', () => {
  let component: PersonTripsComponent;
  let fixture: ComponentFixture<PersonTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
