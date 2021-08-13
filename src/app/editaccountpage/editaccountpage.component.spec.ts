import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaccountpageComponent } from './editaccountpage.component';

describe('EditaccountpageComponent', () => {
  let component: EditaccountpageComponent;
  let fixture: ComponentFixture<EditaccountpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaccountpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaccountpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
