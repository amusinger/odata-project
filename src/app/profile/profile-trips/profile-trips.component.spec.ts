import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTripsComponent } from './profile-trips.component';

describe('ProfileTripsComponent', () => {
  let component: ProfileTripsComponent;
  let fixture: ComponentFixture<ProfileTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
