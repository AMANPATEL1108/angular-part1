import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComPractice } from './com-practice';

describe('ComPractice', () => {
  let component: ComPractice;
  let fixture: ComponentFixture<ComPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComPractice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComPractice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
