import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalidacjaComponent } from './walidacja.component';

describe('WalidacjaComponent', () => {
  let component: WalidacjaComponent;
  let fixture: ComponentFixture<WalidacjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalidacjaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalidacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
