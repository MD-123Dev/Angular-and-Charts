import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartgraphicsComponent } from './chartgraphics.component';

describe('ChartgraphicsComponent', () => {
  let component: ChartgraphicsComponent;
  let fixture: ComponentFixture<ChartgraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartgraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartgraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
