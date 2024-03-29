import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorServiceComponent } from './error-service.component';

describe('ErrorServiceComponent', () => {
  let component: ErrorServiceComponent;
  let fixture: ComponentFixture<ErrorServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
