import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodatamessageComponent } from './nodatamessage.component';

describe('NodatamessageComponent', () => {
  let component: NodatamessageComponent;
  let fixture: ComponentFixture<NodatamessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodatamessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodatamessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
