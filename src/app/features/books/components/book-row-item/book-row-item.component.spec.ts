import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRowItemComponent } from './book-row-item.component';

describe('BookRowItemComponent', () => {
  let component: BookRowItemComponent;
  let fixture: ComponentFixture<BookRowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookRowItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
