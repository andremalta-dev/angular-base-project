import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DirectivesModule } from '@app/@shared/directives/directives.module'
import { HeaderComponent } from '@components/layout/header/header.component'
import { MainContainerComponent } from '@components/layout/main-container/main-container.component'
import { SidebarComponent } from '@components/layout/sidebar/sidebar.component'
import { NgZorroComponentsModule } from '@components/ng-zorro-components.module'
import { AuthTemplateComponent } from '@components/templates/auth-template/auth-template.component'
import { ShellTemplateComponent } from '@components/templates/shell-template/shell-template.component'

const components = [
	SidebarComponent,
	HeaderComponent,
	MainContainerComponent,
	ShellTemplateComponent,
	AuthTemplateComponent,
]

@NgModule({
	declarations: [...components],
	imports: [CommonModule, RouterModule, NgZorroComponentsModule, DirectivesModule],
	exports: [...components],
})
export class ComponentsModule {}
