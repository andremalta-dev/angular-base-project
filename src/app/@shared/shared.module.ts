import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ComponentsModule } from '@app/@shared/components/components.module'
import { DirectivesModule } from './directives/directives.module'

const MODULES = [CommonModule, FormsModule, ReactiveFormsModule, ComponentsModule, DirectivesModule]

@NgModule({
	imports: [...MODULES],
	exports: [...MODULES],
})
export class SharedModule {}
