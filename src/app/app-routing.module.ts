import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PandaDetailPartComponent } from './panda-detail-part/panda-detail-part.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    //component: PandaDetailPartComponent
  },
  {
    path: 'detail',
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    component: PandaDetailPartComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
