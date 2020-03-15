import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POComponentsComponent } from './pocomponents.component';

describe('POComponentsComponent', () => {
  let component: POComponentsComponent;
  let fixture: ComponentFixture<POComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
