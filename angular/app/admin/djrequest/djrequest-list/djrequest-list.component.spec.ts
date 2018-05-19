import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjrequestListComponent } from './djrequest-list.component';

describe('DjrequestListComponent', () => {
  let component: DjrequestListComponent;
  let fixture: ComponentFixture<DjrequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjrequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjrequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
