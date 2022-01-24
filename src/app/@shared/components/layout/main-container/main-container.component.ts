import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core'

@Component({
	selector: 'app-main-container',
	templateUrl: './main-container.component.html',
	styleUrls: ['./main-container.component.less'],
})
export class MainContainerComponent implements OnInit {
	@ViewChild('template', { static: true })
	template!: TemplateRef<unknown>

	constructor(private viewContainerRef: ViewContainerRef) {}

	ngOnInit() {
		this.viewContainerRef.createEmbeddedView(this.template)
	}
}
