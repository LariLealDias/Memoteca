import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosPensamentosComponent } from './modelos-pensamentos.component';

describe('ModelosPensamentosComponent', () => {
  let component: ModelosPensamentosComponent;
  let fixture: ComponentFixture<ModelosPensamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelosPensamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelosPensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
