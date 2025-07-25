import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { FormListComponent } from './features/form/form-list/form-list.component';
import { FormComponent } from './features/form/form/form.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'form-list', component: FormListComponent },
  { path: '', redirectTo: 'form', pathMatch: 'full' },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
