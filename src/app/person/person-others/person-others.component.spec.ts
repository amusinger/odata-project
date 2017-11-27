import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonOthersComponent } from './person-others.component';

describe('PersonOthersComponent', () => {
  let component: PersonOthersComponent;
  let fixture: ComponentFixture<PersonOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
