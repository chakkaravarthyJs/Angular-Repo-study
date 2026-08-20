import { Component, ElementRef, inject, OnInit, signal, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatError, MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { MatSelect, MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatOption } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogBox } from './dialog-box/dialog-box';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatTooltip } from '@angular/material/tooltip';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  imports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltip,
    MatProgressBar,
    MatProgressSpinner,
    MatToolbar,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule, MatError, MatDividerModule, MatIconModule, MatButtonModule, MatSlideToggle, MatCheckbox, MatOption, MatSelect, RouterOutlet, MatFormField, MatInput, MatLabel],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App implements OnInit {
  protected readonly title = signal('angular-study');
  selectedCountry = 'india';
  countries = ['india', 'America', 'canada', 'usa', 'dubai']
  selectionModel = new SelectionModel<string>(true, ['india'])
  private dialog = inject(MatDialog)
  private snakeBar = inject(MatSnackBar)

  form: UntypedFormGroup;
  fb = inject(UntypedFormBuilder)


  columns: string[] = [
    'id',
    'name',
    'email',
    'role',
    'experience',
    'salary'
  ];

  // Columns that Material table should display
  displayedColumns: string[] = this.columns;

  // Dummy data
  dataSource = new MatTableDataSource([
    {
      id: 1,
      name: 'Chakkaravarthy',
      email: 'chakkaravarthy@gmail.com',
      role: 'Angular Developer',
      experience: 2,
      salary: 450000
    },
    {
      id: 2,
      name: 'Arun Kumar',
      email: 'arun@gmail.com',
      role: 'React Developer',
      experience: 3,
      salary: 550000
    },
    {
      id: 3,
      name: 'Priya',
      email: 'priya@gmail.com',
      role: 'UI Developer',
      experience: 1,
      salary: 350000
    },
    {
      id: 4,
      name: 'Karthik',
      email: 'karthik@gmail.com',
      role: 'Full Stack Developer',
      experience: 4,
      salary: 700000
    },
    {
      id: 5,
      name: 'Divya',
      email: 'divya@gmail.com',
      role: 'Frontend Developer',
      experience: 2,
      salary: 480000
    },
    {
      id: 6,
      name: 'Vijay',
      email: 'vijay@gmail.com',
      role: 'Backend Developer',
      experience: 5,
      salary: 850000
    },
    {
      id: 7,
      name: 'Meena',
      email: 'meena@gmail.com',
      role: 'Angular Developer',
      experience: 3,
      salary: 600000
    },   {
      id: 1,
      name: 'Chakkaravarthy',
      email: 'chakkaravarthy@gmail.com',
      role: 'Angular Developer',
      experience: 2,
      salary: 450000
    },
    {
      id: 2,
      name: 'Arun Kumar',
      email: 'arun@gmail.com',
      role: 'React Developer',
      experience: 3,
      salary: 550000
    },
    {
      id: 3,
      name: 'Priya',
      email: 'priya@gmail.com',
      role: 'UI Developer',
      experience: 1,
      salary: 350000
    },
    {
      id: 4,
      name: 'Karthik',
      email: 'karthik@gmail.com',
      role: 'Full Stack Developer',
      experience: 4,
      salary: 700000
    },
    {
      id: 5,
      name: 'Divya',
      email: 'divya@gmail.com',
      role: 'Frontend Developer',
      experience: 2,
      salary: 480000
    },
    {
      id: 6,
      name: 'Vijay',
      email: 'vijay@gmail.com',
      role: 'Backend Developer',
      experience: 5,
      salary: 850000
    },
    {
      id: 7,
      name: 'Meena',
      email: 'meena@gmail.com',
      role: 'Angular Developer',
      experience: 3,
      salary: 600000
    },   {
      id: 1,
      name: 'Chakkaravarthy',
      email: 'chakkaravarthy@gmail.com',
      role: 'Angular Developer',
      experience: 2,
      salary: 450000
    },
    {
      id: 2,
      name: 'Arun Kumar',
      email: 'arun@gmail.com',
      role: 'React Developer',
      experience: 3,
      salary: 550000
    },
    {
      id: 3,
      name: 'Priya',
      email: 'priya@gmail.com',
      role: 'UI Developer',
      experience: 1,
      salary: 350000
    },
    {
      id: 4,
      name: 'Karthik',
      email: 'karthik@gmail.com',
      role: 'Full Stack Developer',
      experience: 4,
      salary: 700000
    },
    {
      id: 5,
      name: 'Divya',
      email: 'divya@gmail.com',
      role: 'Frontend Developer',
      experience: 2,
      salary: 480000
    },
    {
      id: 6,
      name: 'Vijay',
      email: 'vijay@gmail.com',
      role: 'Backend Developer',
      experience: 5,
      salary: 850000
    },
    {
      id: 7,
      name: 'Meena',
      email: 'meena@gmail.com',
      role: 'Angular Developer',
      experience: 3,
      salary: 600000
    }
  ]);

  paginator = viewChild<MatPaginator>(MatPaginator);


  ngOnInit(): void {
    this.form = this.fb?.group({
      name: [null, [Validators.required]],
      age: [null]
    })
    this.dataSource.paginator = this.paginator();
  }

  callRun(event: MatSelectChange): void {
    this.selectionModel.clear();
    if (event?.value?.length) {
      event?.value?.forEach((val: any) => {
        this.selectionModel.select(val)
      })
    }
    console.log("fa");
  }

  openDialog(): void {
    this.snakeBar?.open(
      'hellow', 'close', { duration: 3000 }
    )
    const dialog = this.dialog?.open(DialogBox, {
      height: '500px',
      width: '600px',
      data: {
        name: "chakkaravarthy"
      }
    })
  }

  onSortChange(event: Sort): void {
    console.log(event);
    
  }
  
}
