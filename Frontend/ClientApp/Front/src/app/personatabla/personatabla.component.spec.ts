import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaTablaComponent } from './personatabla.component';

describe('PersonatablaComponent', () => {
  let component: PersonaTablaComponent;
  let fixture: ComponentFixture<PersonaTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
