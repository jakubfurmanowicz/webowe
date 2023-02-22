import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenQuotesComponent } from './golden-quotes.component';

describe('GoldenQuotesComponent', () => {
  let component: GoldenQuotesComponent;
  let fixture: ComponentFixture<GoldenQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldenQuotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldenQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
