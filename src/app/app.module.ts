import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {StoreComponent} from './store/store.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ComponentsComponent} from './components/components.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';

import {LoginService} from './login/login.service';
import {ArticleComponent} from './store/components/article.component';

@NgModule({


  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    StoreComponent,
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


