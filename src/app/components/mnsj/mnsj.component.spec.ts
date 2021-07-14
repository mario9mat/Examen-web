import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnsjComponent } from './mnsj.component';

describe('MnsjComponent', () => {
  let component: MnsjComponent;
  let fixture: ComponentFixture<MnsjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnsjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MnsjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
