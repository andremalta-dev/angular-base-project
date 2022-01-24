import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AuthRoutingModule } from './auth-routing.module'
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component'
import { LoginComponent } from './pages/login/login.component'

@NgModule({
	declarations: [LoginComponent, ForgotPasswordComponent],
	imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
