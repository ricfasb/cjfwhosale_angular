import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTopoComponent } from './nav-topo.component';

describe('NavTopoComponent', () => {
  let component: NavTopoComponent;
  let fixture: ComponentFixture<NavTopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTopoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
