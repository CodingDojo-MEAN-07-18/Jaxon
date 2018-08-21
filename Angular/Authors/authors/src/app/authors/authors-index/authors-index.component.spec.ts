import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsIndexComponent } from './authors-index.component';

describe('AuthorsIndexComponent', () => {
  let component: AuthorsIndexComponent;
  let fixture: ComponentFixture<AuthorsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
