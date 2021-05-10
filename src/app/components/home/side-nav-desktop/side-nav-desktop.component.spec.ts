import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavDesktopComponent } from './side-nav-desktop.component';

describe('SideNavDesktopComponent', () => {
  let component: SideNavDesktopComponent;
  let fixture: ComponentFixture<SideNavDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
