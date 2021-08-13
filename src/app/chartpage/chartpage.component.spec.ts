import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartpageComponent } from './chartpage.component';

describe('ChartpageComponent', () => {
  let component: ChartpageComponent;
  let fixture: ComponentFixture<ChartpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
