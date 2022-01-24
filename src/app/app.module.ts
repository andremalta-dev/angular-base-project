import { registerLocaleData } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import en from '@angular/common/locales/en'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { SharedModule } from '@app/@shared/shared.module'
import { environment } from '@envs/environment'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n'
import { AppInitializerProvider } from './app-initializer.service'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

registerLocaleData(en)

@NgModule({
	declarations: [AppComponent],
	imports: [
		RouterModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		SharedModule,
		AppRoutingModule,
		StoreModule.forRoot({}, {}),
		StoreDevtoolsModule.instrument({ maxAge: 50, logOnly: environment.production }),
		EffectsModule.forRoot([]),
	],
	providers: [AppInitializerProvider, { provide: NZ_I18N, useValue: en_US }],
	bootstrap: [AppComponent],
})
export class AppModule {}
