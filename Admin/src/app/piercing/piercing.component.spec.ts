import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiercingComponent } from './piercing.component';

describe('PiercingComponent', () => {
  let component: PiercingComponent;
  let fixture: ComponentFixture<PiercingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiercingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiercingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
