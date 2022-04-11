import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeRestaurantComponent } from './commande.component';

describe('CommandeRestaurantComponent', () => {
  let component: CommandeRestaurantComponent;
  let fixture: ComponentFixture<CommandeRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
