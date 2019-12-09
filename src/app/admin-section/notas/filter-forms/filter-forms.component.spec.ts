import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFormsComponent } from './filter-forms.component';

describe('FilterFormsComponent', () => {
  let component: FilterFormsComponent;
  let fixture: ComponentFixture<FilterFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
