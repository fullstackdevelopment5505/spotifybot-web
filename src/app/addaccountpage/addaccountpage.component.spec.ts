import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccountpageComponent } from './addaccountpage.component';

describe('AddaccountpageComponent', () => {
  let component: AddaccountpageComponent;
  let fixture: ComponentFixture<AddaccountpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaccountpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaccountpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
