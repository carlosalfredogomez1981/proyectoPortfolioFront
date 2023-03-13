import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PekesComponent } from './pekes.component';

describe('PekesComponent', () => {
  let component: PekesComponent;
  let fixture: ComponentFixture<PekesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PekesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PekesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
