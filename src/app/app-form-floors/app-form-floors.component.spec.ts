import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormFloorsComponent } from './app-form-floors.component';

describe('AppFormFloorsComponent', () => {
  let component: AppFormFloorsComponent;
  let fixture: ComponentFixture<AppFormFloorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFormFloorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormFloorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
