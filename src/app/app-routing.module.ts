import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimatedIconsComponent } from './animated-icons/animated-icons.component';
import { ButtonComponent } from './button/button.component';
import { EmailUnsubscriptionComponent } from './email-unsubscription/email-unsubscription.component';
import { HoverEffectsComponent } from './hover-effects/hover-effects.component';
import { InputAnimationComponent } from './input-animation/input-animation.component';
import { ListingDataComponent } from './listing-data/listing-data.component';
import { MenuAnimationsComponent } from './menu-animations/menu-animations.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ValidationEffectsComponent } from './validation-effects/validation-effects.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent
  },
  {
    path: 'animatedIcon',
    component: AnimatedIconsComponent
  },
  {
    path: 'validation',
    component: ValidationEffectsComponent
  },
  {
    path: 'pageNotFound',
    component: PagenotfoundComponent
  },
  {
    path: 'menuAnimation',
    component: MenuAnimationsComponent
  },
  {
    path: 'list',
    component: ListingDataComponent
  },
  {
    path: 'inputAnimation',
    component: InputAnimationComponent
  },
  {
    path: 'hoverEffect',
    component: HoverEffectsComponent
  },
  {
    path: 'emailUnsubscription',
    component: EmailUnsubscriptionComponent
  },
  {
    path: 'buttonAnimation',
    component: ButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
