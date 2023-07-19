import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalViewComponent } from './external-view.component';

describe('ExternalViewComponent', () => {
  let component: ExternalViewComponent;
  let fixture: ComponentFixture<ExternalViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExternalViewComponent]
    });
    fixture = TestBed.createComponent(ExternalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
