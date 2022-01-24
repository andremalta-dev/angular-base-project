import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
	@ViewChild('template', { static: true })
	template!: TemplateRef<HeaderComponent>

	@Input()
	public isCollapsed!: boolean

	@Output()
	public collapseClick = new EventEmitter<boolean>()
	setCollapsed() {
		this.collapseClick.emit(!this.isCollapsed)
	}

	constructor(private viewContainerRef: ViewContainerRef) {}

	ngOnInit() {
		this.viewContainerRef.createEmbeddedView(this.template)
	}
}
