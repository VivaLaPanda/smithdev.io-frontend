import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UIComponentModule } from './uicomponent-module/uicomponent-module.module'

// smithdev components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { JumbotronComponent } from './navigation/jumbotron/jumbotron.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './router/app-routing.module';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { BuildBetterRowComponent } from './home/build-better-row/build-better-row.component';
import { LiveOnPurposeRowComponent } from './home/live-on-purpose-row/live-on-purpose-row.component';
import { ReadItemCardComponent, ReadItemDetailsComponent } from './reading-list/read-item-card/read-item-card.component';
import { SeeWorkComponentComponent } from './about/see-work-component/see-work-component.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { StickyModule } from 'ng2-sticky-kit/ng2-sticky-kit';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    BlogComponent,
    AboutComponent,
    HomeComponent,
    SidenavComponent,
    ReadingListComponent,
    BuildBetterRowComponent,
    LiveOnPurposeRowComponent,
    ReadItemCardComponent,
    ReadItemDetailsComponent,
    SeeWorkComponentComponent
  ],
  imports: [
    BrowserModule,
    LazyLoadImageModule,
    BrowserAnimationsModule,
    UIComponentModule,
    AppRoutingModule,
    StickyModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ReadItemDetailsComponent]
})
export class AppModule { }
