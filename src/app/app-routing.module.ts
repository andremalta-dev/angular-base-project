import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { AuthTemplateComponent } from '@app/@shared/components/templates/auth-template/auth-template.component'
import { ShellTemplateComponent } from '@app/@shared/components/templates/shell-template/shell-template.component'
import { AuthGuard } from '@app/core/guard/auth.guard'

const routes: Routes = [
	{
		path: '',
		component: ShellTemplateComponent,
		loadChildren: () => import('@modules/admin/admin.module').then((m) => m.AdminModule),
		canActivate: [AuthGuard],
	},
	{
		path: '',
		component: AuthTemplateComponent,
		loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule),
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
