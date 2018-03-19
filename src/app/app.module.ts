import { BrowserModule } from '@angular/platform-browser';
import { InputAnimationComponent } from './input-animation/input-animation.component';
import { ButtonComponent } from './button/button.component';
import { ValidationEffectsComponent } from './validation-effects/validation-effects.component';
import { MenuAnimationsComponent } from './menu-animations/menu-animations.component';
import { HoverEffectsComponent } from './hover-effects/hover-effects.component';
import { EmailUnsubscriptionComponent } from './email-unsubscription/email-unsubscription.component';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListingDataComponent } from './listing-data/listing-data.component';
import { AnimatedIconsComponent } from './animated-icons/animated-icons.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingDataComponent,
    AnimatedIconsComponent,
    EmailUnsubscriptionComponent,
    HoverEffectsComponent,
    MenuAnimationsComponent,
    ValidationEffectsComponent,
    ButtonComponent,
    InputAnimationComponent,
    PagenotfoundComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
