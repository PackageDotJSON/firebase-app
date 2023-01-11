import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// importing material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// importing firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

import { APP_ROUTES } from './routes/routes';
import { HomeComponent } from './pages/home/home.component';
import { FIRE_BASE_SETTINGS } from './settings/settings';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    MatToolbarModule,
    MatButtonModule,
    AngularFireModule.initializeApp({
      apiKey: FIRE_BASE_SETTINGS.API_KEY,
      authDomain: FIRE_BASE_SETTINGS.AUTH_DOMAIN,
      projectId: FIRE_BASE_SETTINGS.PROJECT_ID,
      storageBucket: FIRE_BASE_SETTINGS.STORAGE_BUCKET,
      messagingSenderId: FIRE_BASE_SETTINGS.MESSAGE_SENDER_ID,
      appId: FIRE_BASE_SETTINGS.APP_ID,
      measurementId: FIRE_BASE_SETTINGS.MEASUREMENT_ID,
    }),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
