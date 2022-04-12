import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreurAdminComponent } from './livreur.component';

describe('LivreurAdminComponent', () => {
  let component: LivreurAdminComponent;
  let fixture: ComponentFixture<LivreurAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreurAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreurAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
