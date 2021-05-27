<import { ComponentFix>ture, TestBed } from '@angular/core/testing';

import { BoarderComponent } from './boarder.component';

describe('BoarderComponent', () => {
  let component: BoarderComponent;
  let fixture: ComponentFixture<BoarderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoarderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoarderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
