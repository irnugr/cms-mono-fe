import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHomeMenuComponent } from './sidebar-home-menu.component';

describe('SidebarHomeMenuComponent', () => {
  let component: SidebarHomeMenuComponent;
  let fixture: ComponentFixture<SidebarHomeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarHomeMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarHomeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
