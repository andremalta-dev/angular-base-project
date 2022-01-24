import { APP_INITIALIZER } from '@angular/core'
import { ThemeService } from '@app/core/services'

export const AppInitializerProvider = {
	provide: APP_INITIALIZER,
	useFactory: (themeService: ThemeService) => () => themeService.loadTheme(),
	deps: [ThemeService],
	multi: true,
}
