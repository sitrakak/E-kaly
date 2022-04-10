import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrerComponent } from './livrer.component';

describe('LivrerComponent', () => {
  let component: LivrerComponent;
  let fixture: ComponentFixture<LivrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
