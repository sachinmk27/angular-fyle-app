import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';





@NgModule({
    declarations: [
      
    ],
    imports: [
      MatInputModule,
      MatToolbarModule,
      MatTableModule,
      MatSelectModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatProgressBarModule
    ],
    exports: [
      MatInputModule,
      MatToolbarModule,
      MatTableModule,
      MatSelectModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatProgressBarModule
    ],
    providers: [],
  })
  export class MaterialModule { }