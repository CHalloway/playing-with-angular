import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraigsComponentComponent } from './craigs-component.component';

describe('CraigsComponentComponent', () => {
  let component: CraigsComponentComponent;
  let fixture: ComponentFixture<CraigsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraigsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraigsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be using typescript', async(() => {
    fixture = TestBed.createComponent(CraigsComponentComponent);
    component = fixture.componentInstance;
    expect(fixture.componentInstance.typescriptFunction).toEqual("I'm created with typescript!");
  }));
});
