import { Component } from '@angular/core'

@Component({
	selector: 'app-shell-template',
	templateUrl: './shell-template.component.html',
	styleUrls: ['./shell-template.component.less'],
})
export class ShellTemplateComponent {
	isCollapsed = false

	collapse = (value: boolean) => {
		this.isCollapsed = value
	}
}
