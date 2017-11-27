import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFriendsComponent } from './person-friends.component';

describe('PersonFriendsComponent', () => {
  let component: PersonFriendsComponent;
  let fixture: ComponentFixture<PersonFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
