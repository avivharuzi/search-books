import { NgModule } from '@angular/core';

import { CoreComponent } from './core.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CoreComponent, HomeComponent],
  imports: [SharedModule],
})
export class CoreModule {}
