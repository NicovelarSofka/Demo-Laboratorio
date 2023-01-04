import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaCreacionComponent } from './personacreacion.component';

describe('PersonacreacionComponent', () => {
  let component: PersonaCreacionComponent;
  let fixture: ComponentFixture<PersonaCreacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaCreacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
