import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposUsuarioComponent } from './repos-usuario.component';

describe('ReposUsuarioComponent', () => {
  let component: ReposUsuarioComponent;
  let fixture: ComponentFixture<ReposUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
