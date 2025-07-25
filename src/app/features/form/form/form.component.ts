import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../../core/services/form.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formData: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.formData = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
      address: [''],
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    this.formService.createForm(this.formData.value).subscribe({
      next: () => {
        alert('Form submitted successfully!');
        this.formData.reset();
      },
      error: (err) => {
        console.error('Form submission error:', err);
        alert('Form submission failed.');
      },
    });
  }
}
