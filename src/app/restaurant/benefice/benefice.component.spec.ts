import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficeComponent } from './benefice.component';

describe('BeneficeComponent', () => {
  let component: BeneficeComponent;
  let fixture: ComponentFixture<BeneficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
