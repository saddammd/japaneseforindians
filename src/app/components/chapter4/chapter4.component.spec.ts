import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter4Component } from './chapter4.component';

describe('Chapter4Component', () => {
  let component: Chapter4Component;
  let fixture: ComponentFixture<Chapter4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chapter4Component]
    });
    fixture = TestBed.createComponent(Chapter4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
