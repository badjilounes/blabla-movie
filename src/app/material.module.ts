import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [MatAutocompleteModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  exports: [MatAutocompleteModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule, MatSnackBarModule]
})
export class MaterialModule { }
