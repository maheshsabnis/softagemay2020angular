import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityComponent } from './components/app.utility.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// define a Child Route Table. This will be registered
// as forChild() for the LazyModule

const routes: Routes = [
  {
    path: '', component: UtilityComponent
  }
];


@NgModule({
  declarations: [UtilityComponent],
  // import the RouterModule to register the
  // RouteTable as forChild
  // Wherever this FeatureModule is loaded (early/lazy)
  // the RouteTabale will be loaded as Child for
  // the routing present in the parent
  imports: [ CommonModule, FormsModule, RouterModule.forChild(routes) ]
})
export class FeatureModule {}
