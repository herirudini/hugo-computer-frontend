import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortProductComponent } from './sort-product.component';

describe('SortProductComponent', () => {
  let component: SortProductComponent;
  let fixture: ComponentFixture<SortProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
