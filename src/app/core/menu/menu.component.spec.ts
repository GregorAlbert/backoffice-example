import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should route to Dashboard', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.navigate('dashboard');
    expect(navigateSpy).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should route to Users', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.navigate('users');
    expect(navigateSpy).toHaveBeenCalledWith(['/users']);
  });
});
