import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

const routes: Routes = [
  // NOTE: path: '/dashboard' PagesRouting
  // NOTE: path: '/auth' AuthRouting
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: NotpagefoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
