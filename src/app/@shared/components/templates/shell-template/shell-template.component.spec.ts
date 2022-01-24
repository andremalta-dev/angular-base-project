import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ShellTemplateComponent } from './shell-template.component'

describe('ShellTemplateComponent', () => {
	let component: ShellTemplateComponent
	let fixture: ComponentFixture<ShellTemplateComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ShellTemplateComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(ShellTemplateComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
