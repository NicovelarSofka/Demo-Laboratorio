import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaModificacionComponent } from './personamodificacion.component';

describe('PersonamodificacionComponent', () => {
  let component: PersonaModificacionComponent;
  let fixture: ComponentFixture<PersonaModificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaModificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaModificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
