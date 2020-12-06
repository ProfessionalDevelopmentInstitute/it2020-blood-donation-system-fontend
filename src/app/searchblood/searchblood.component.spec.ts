import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbloodComponent } from './searchblood.component';

describe('SearchbloodComponent', () => {
  let component: SearchbloodComponent;
  let fixture: ComponentFixture<SearchbloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbloodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
