import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNewComponent } from './game-new.component';

describe('GameNewComponent', () => {
  let component: GameNewComponent;
  let fixture: ComponentFixture<GameNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
