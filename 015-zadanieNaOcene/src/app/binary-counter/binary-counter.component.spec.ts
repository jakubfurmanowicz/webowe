import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryCounterComponent } from './binary-counter.component';

describe('BinaryCounterComponent', () => {
  let component: BinaryCounterComponent;
  let fixture: ComponentFixture<BinaryCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaryCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinaryCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
