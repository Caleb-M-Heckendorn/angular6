import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaailsComponent } from './detaails.component';

describe('DetaailsComponent', () => {
  let component: DetaailsComponent;
  let fixture: ComponentFixture<DetaailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
