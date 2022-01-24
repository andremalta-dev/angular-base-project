import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { DebounceClickDirective } from './debounce-click.directive'
import { ScreenLessHiddenDirective } from './screen-less-hidden.directive'
import { ToggleFullscreenDirective } from './toggle-fullscreen.directive'

const DIRECTIVES = [ToggleFullscreenDirective, DebounceClickDirective, ScreenLessHiddenDirective]

@NgModule({
	declarations: [...DIRECTIVES],
	imports: [CommonModule],
	exports: [...DIRECTIVES],
})
export class DirectivesModule {}
