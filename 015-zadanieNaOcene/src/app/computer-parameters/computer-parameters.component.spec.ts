import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerParametersComponent } from './computer-parameters.component';

describe('ComputerParametersComponent', () => {
  let component: ComputerParametersComponent;
  let fixture: ComponentFixture<ComputerParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerParametersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
