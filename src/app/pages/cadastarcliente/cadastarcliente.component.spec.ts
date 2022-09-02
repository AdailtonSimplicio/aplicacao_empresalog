import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastarclienteComponent } from './cadastarcliente.component';

describe('CadastarclienteComponent', () => {
  let component: CadastarclienteComponent;
  let fixture: ComponentFixture<CadastarclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastarclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
