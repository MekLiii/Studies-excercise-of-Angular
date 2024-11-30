import { Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {InfoComponent} from './components/info/info.component';
import {ContactComponent} from './components/contact/contact.component';
import {WeatherComponent} from './weather/weather.component';

export const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"info",component:InfoComponent},
  {path:"contact",component:ContactComponent},
  {path:"weather",component:WeatherComponent}
];
