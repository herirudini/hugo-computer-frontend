import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingHistoryComponent } from './purchasing-history.component';

describe('PurchasingHistoryComponent', () => {
  let component: PurchasingHistoryComponent;
  let fixture: ComponentFixture<PurchasingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasingHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
