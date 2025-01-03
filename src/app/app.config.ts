import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"noteapp-98636","appId":"1:1051546423371:web:f0dee32a90c5acb498fdce","storageBucket":"noteapp-98636.firebasestorage.app","apiKey":"AIzaSyBHx_y6L1VYwfTvS5-ZBvK8afNVAzJaXtA","authDomain":"noteapp-98636.firebaseapp.com","messagingSenderId":"1051546423371"})), provideFirestore(() => getFirestore())]
};
