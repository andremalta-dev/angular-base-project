import { ChangeDetectorRef, Directive, HostListener, OnInit } from '@angular/core'
import screenfull from 'screenfull'

@Directive({
	selector: '[appToggleFullscreen]',
	exportAs: 'appToggleFullscreen',
})
export class ToggleFullscreenDirective implements OnInit {
	isFullScreen = false

	constructor(private changeDetectionRef: ChangeDetectorRef) {}

	ngOnInit(): void {
		screenfull.onchange(() => {
			setTimeout(() => {
				this.isFullScreen = !this.isFullScreen
				this.changeDetectionRef.markForCheck()
			}, 10)
		})
	}

	@HostListener('click') onClick() {
		if (screenfull.isEnabled) {
			screenfull.toggle()
		}
	}
}
