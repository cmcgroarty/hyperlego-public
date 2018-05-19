import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjrequestItemComponent } from './djrequest-item.component';

describe('DjrequestItemComponent', () => {
  let component: DjrequestItemComponent;
  let fixture: ComponentFixture<DjrequestItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjrequestItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjrequestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
