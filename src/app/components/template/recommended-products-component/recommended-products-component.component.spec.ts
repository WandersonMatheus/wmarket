import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedProductsComponentComponent } from './recommended-products-component.component';

describe('RecommendedProductsComponentComponent', () => {
  let component: RecommendedProductsComponentComponent;
  let fixture: ComponentFixture<RecommendedProductsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedProductsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedProductsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
