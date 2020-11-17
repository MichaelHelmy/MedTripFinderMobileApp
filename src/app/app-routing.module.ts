import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'specialities',
    pathMatch: 'full'
  },
  { path: 'sign-in', loadChildren: './pages/sign-in/sign-in.module#SignInPageModule' },
  { path: 'sign-up', loadChildren: './pages/sign-up/sign-up.module#SignUpPageModule' },
  { path: 'find-adoctor', loadChildren: './pages/find-adoctor/find-adoctor.module#FindADoctorPageModule' },
  { path: 'forget-password-modal', loadChildren: './modals/forget-password-modal/forget-password-modal.module#ForgetPasswordModalPageModule' },
  { path: 'verification-code', loadChildren: './pages/verification-code/verification-code.module#VerificationCodePageModule' },
  { path: 'change-password', loadChildren: './pages/change-password/change-password.module#ChangePasswordPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'saved', loadChildren: './pages/saved/saved.module#SavedPageModule' },
  { path: 'account', loadChildren: './pages/account/account.module#AccountPageModule' },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: 'my-requests', loadChildren: './pages/my-requests/my-requests.module#MyRequestsPageModule' },
  { path: 'notification', loadChildren: './pages/notification/notification.module#NotificationPageModule' },
  { path: 'rate-doctor-modal', loadChildren: './modals/rate-doctor-modal/rate-doctor-modal.module#RateDoctorModalPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'specialities', loadChildren: './pages/specialities/specialities.module#SpecialitiesPageModule' },
  { path: 'doctorsbyspeciality', loadChildren: './pages/doctorsbyspeciality/doctorsbyspeciality.module#DoctorsbyspecialityPageModule' },
  { path: 'speciality-detail', loadChildren: './pages/speciality-detail/speciality-detail.module#SpecialityDetailPageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
