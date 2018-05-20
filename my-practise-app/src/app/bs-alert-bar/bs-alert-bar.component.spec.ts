import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsAlertBarComponent } from './bs-alert-bar.component';

describe('BsAlertBarComponent', () => {
  let component: BsAlertBarComponent;
  let fixture: ComponentFixture<BsAlertBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsAlertBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsAlertBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
