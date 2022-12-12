import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WycenaComponent } from './wycena.component';

describe('WycenaComponent', () => {
  let component: WycenaComponent;
  let fixture: ComponentFixture<WycenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WycenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WycenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
