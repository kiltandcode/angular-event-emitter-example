import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveNewToDoComponent } from './save-new-to-do.component';

describe('SaveNewToDoComponent', () => {
  let component: SaveNewToDoComponent;
  let fixture: ComponentFixture<SaveNewToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveNewToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveNewToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
