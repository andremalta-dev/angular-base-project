import { BreakpointObserver } from '@angular/cdk/layout'
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
	selector: '[appScreenLessHidden]',
})
export class ScreenLessHiddenDirective {
	@Input()
	set appScreenLessHidden(lessScreen: string | undefined) {
		if (!lessScreen) {
			this.show(true)
			return
		}
		this.breakpointObserver.observe([`(max-width: ${lessScreen}px)`]).subscribe((result) => {
			if (result.matches) {
				this.show(false)
			} else {
				this.show(true)
			}
		})
	}

	constructor(
		private breakpointObserver: BreakpointObserver,
		private templateRef: TemplateRef<unknown>,
		private viewContainerRef: ViewContainerRef
	) {}

	private show(matched: boolean): void {
		matched ? this.viewContainerRef.createEmbeddedView(this.templateRef) : this.viewContainerRef.clear()
	}
}
