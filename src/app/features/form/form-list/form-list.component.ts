// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { FormService } from '../../../core/services/form.service';

// @Component({
//   selector: 'app-form-list',
//   standalone: true,
//   imports: [CommonModule, HttpClientModule, FormsModule],
//   templateUrl: './form-list.component.html',
//   styleUrls: ['./form-list.component.scss'],
// })
// export class FormListComponent implements OnInit {
//   forms: any[] = [];
//   selectedForm: any = null;

//   constructor(private formService: FormService) {}

//   ngOnInit(): void {
//     this.loadForms();
//   }

//   loadForms() {
//     this.formService.getForms().subscribe((data) => (this.forms = data));
//   }

//   editForm(form: any) {
//     this.selectedForm = { ...form };
//   }

//   // updateForm() {
//   //   this.formService
//   //     .updateForm(this.selectedForm.id, this.selectedForm)
//   //     .subscribe(() => {
//   //       console.log('Clicked form from table:', this.selectedForm);
//   //       this.selectedForm = null;
//   //       this.loadForms();
//   //     });
//   // }
//   updateForm() {
//     if (!this.selectedForm?.id) {
//       console.error(
//         '❌ No ID in selectedForm. Cannot update.',
//         this.selectedForm
//       );
//       alert('Update failed: ID missing. Please reload the list and try again.');
//       return;
//     }

//     this.formService
//       .updateForm(this.selectedForm.id, this.selectedForm)
//       .subscribe({
//         next: () => {
//           this.selectedForm = null;
//           this.loadForms();
//         },
//         error: (err) => {
//           console.error('Update error:', err);
//           alert('Update failed on server.');
//         },
//       });
//   }

//   cancelEdit() {
//     this.selectedForm = null;
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormModel } from '../../../core/models/form.model';
import { FormService } from '../../../core/services/form.service';

@Component({
  selector: 'app-form-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss'],
})
export class FormListComponent implements OnInit {
  forms: FormModel[] = [];
  selectedForm: FormModel | null = null;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms(): void {
    this.formService.getForms().subscribe({
      next: (data) => {
        this.forms = data;
        console.log('Loaded forms:', data);
      },
      error: (err) => {
        console.error('Error loading forms:', err);
      },
    });
  }

  editForm(form: any) {
    this.selectedForm = { ...form };
  }

  updateForm() {
    if (!this.selectedForm?.id) {
      console.error(
        '❌ No ID in selectedForm. Cannot update.',
        this.selectedForm
      );
      alert('Update failed: ID missing. Please reload the list and try again.');
      return;
    }

    this.formService
      .updateForm(this.selectedForm.id, this.selectedForm)
      .subscribe({
        next: () => {
          this.selectedForm = null;
          this.loadForms();
        },
        error: (err) => {
          console.error('Update error:', err);
          alert('Update failed on server.');
        },
      });
  }

  cancelEdit() {
    this.selectedForm = null;
  }

  // --- Opens the PDF in a new tab ---
  openPdf(id: number | undefined, type: 'a4' | 'stamp'): void {
    if (!id) {
      alert('PDF unavailable: ID missing.');
      return;
    }
    window.open(`http://localhost:8080/api/forms/${id}/pdf/${type}`, '_blank');

    /* OPTIONAL blob download style:
  openPdf(id: number, type: 'a4' | 'legal') {
    const obs = type === 'a4'
      ? this.formService.getA4PdfBlob(id)
      : this.formService.getLegalPdfBlob(id);

    obs.subscribe(blob => {
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    });
  }
  */
  }
}
