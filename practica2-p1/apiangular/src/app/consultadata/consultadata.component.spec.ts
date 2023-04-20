import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultadataComponent } from './consultadata.component';

describe('ConsultadataComponent', () => {
  let component: ConsultadataComponent;
  let fixture: ComponentFixture<ConsultadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultadataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
