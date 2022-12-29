import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'patient-register',
    loadChildren: () => import('./patient-register/patient-register.module').then( m => m.PatientRegisterPageModule)
  },
  {
    path: 'welcome-splash-screen',
    loadChildren: () => import('./welcome-splash-screen/welcome-splash-screen.module').then( m => m.WelcomeSplashScreenPageModule)
  },
  {
    path: 'clinic-register',
    loadChildren: () => import('./clinic-register/clinic-register.module').then( m => m.ClinicRegisterPageModule)
  },
  {
    path: 'primary-register',
    loadChildren: () => import('./primary-register/primary-register.module').then( m => m.PrimaryRegisterPageModule)
  },
  {
    path: 'patient-dashboard',
    loadChildren: () => import('./patient-dashboard/patient-dashboard.module').then( m => m.PatientDashboardPageModule)
  },
  {
    path: 'patient-medications',
    loadChildren: () => import('./patient-medications/patient-medications.module').then( m => m.PatientMedicationsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
