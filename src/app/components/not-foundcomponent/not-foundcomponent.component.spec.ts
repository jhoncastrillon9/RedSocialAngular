import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundcomponentComponent } from './not-foundcomponent.component';

describe('NotFoundcomponentComponent', () => {
  let component: NotFoundcomponentComponent;
  let fixture: ComponentFixture<NotFoundcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
