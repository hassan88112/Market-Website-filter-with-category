import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpannerComponent } from './spanner.component';

describe('SpannerComponent', () => {
  let component: SpannerComponent;
  let fixture: ComponentFixture<SpannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
