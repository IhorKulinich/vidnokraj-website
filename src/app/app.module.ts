import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { AuctionComponent } from './auction/auction.component';
import { HelpingComponent } from './helping/helping.component';
import { SouvenirsComponent } from './souvenirs/souvenirs.component';
import { AboutComponent } from './about/about.component';
import { ReportsComponent } from './reports/reports.component';
import { FaqComponent } from './faq/faq.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AuctionComponent,
    HelpingComponent,
    SouvenirsComponent,
    AboutComponent,
    ReportsComponent,
    FaqComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
