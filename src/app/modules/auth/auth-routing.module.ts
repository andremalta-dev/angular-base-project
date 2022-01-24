import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ForgotPasswordComponent } from '@modules/auth/pages/forgot-password/forgot-password.component'
import { LoginComponent } from '@modules/auth/pages/login/login.component'

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'login' },
	{ path: 'login', component: LoginComponent, data: { title: 'Login' } },
	{ path: 'forgot', component: ForgotPasswordComponent, data: { title: 'Forgot Password' } },
	{ path: '**', pathMatch: 'full', redirectTo: '' },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
