import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core'

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent implements OnInit {
	@ViewChild('template', { static: true })
	template!: TemplateRef<unknown>

	@Input()
	public isCollapsed!: boolean

	constructor(private viewContainerRef: ViewContainerRef) {}

	ngOnInit() {
		this.viewContainerRef.createEmbeddedView(this.template)
	}
}
