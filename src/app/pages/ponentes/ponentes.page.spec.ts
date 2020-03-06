import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PonentesPage } from './ponentes.page';

describe('PonentesPage', () => {
  let component: PonentesPage;
  let fixture: ComponentFixture<PonentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PonentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
