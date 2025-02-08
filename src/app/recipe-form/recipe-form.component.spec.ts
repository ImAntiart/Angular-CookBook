import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeFormComponent } from './recipe-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

describe('RecipeFormComponent', () => {
  let component: RecipeFormComponent;
  let fixture: ComponentFixture<RecipeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeFormComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
