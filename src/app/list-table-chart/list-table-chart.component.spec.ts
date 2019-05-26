import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTableChartComponent } from './list-table-chart.component';

describe('ListTableChartComponent', () => {
  let component: ListTableChartComponent;
  let fixture: ComponentFixture<ListTableChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTableChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTableChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
