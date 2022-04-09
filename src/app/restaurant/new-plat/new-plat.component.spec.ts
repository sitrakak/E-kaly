import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlatComponent } from './new-plat.component';

describe('NewPlatComponent', () => {
  let component: NewPlatComponent;
  let fixture: ComponentFixture<NewPlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
