import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueLeOfrecemosComponent } from './que-le-ofrecemos.component';

describe('QueLeOfrecemosComponent', () => {
  let component: QueLeOfrecemosComponent;
  let fixture: ComponentFixture<QueLeOfrecemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueLeOfrecemosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueLeOfrecemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
