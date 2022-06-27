import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAllertsComponent } from './warning-allerts.component';

describe('WarningAllertsComponent', () => {
  let component: WarningAllertsComponent;
  let fixture: ComponentFixture<WarningAllertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningAllertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningAllertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
