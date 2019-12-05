import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaCardComponent } from './nota-card.component';

describe('NotaCardComponent', () => {
  let component: NotaCardComponent;
  let fixture: ComponentFixture<NotaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
