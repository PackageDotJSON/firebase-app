import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MessageComponent } from './pages/message.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const featureRoutes: Routes = [{ path: '', component: MessageComponent }];

@NgModule({
  declarations: [MessageComponent, MessageFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(featureRoutes),
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class FeatureModule {}
