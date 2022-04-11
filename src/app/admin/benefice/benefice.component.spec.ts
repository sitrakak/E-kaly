import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficeRestoComponent } from './benefice.component';

describe('BeneficeRestoComponent', () => {
  let component: BeneficeRestoComponent;
  let fixture: ComponentFixture<BeneficeRestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficeRestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficeRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
