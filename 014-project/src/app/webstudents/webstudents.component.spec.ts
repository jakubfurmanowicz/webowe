import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebstudentsComponent } from './webstudents.component';

describe('WebstudentsComponent', () => {
  let component: WebstudentsComponent;
  let fixture: ComponentFixture<WebstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
