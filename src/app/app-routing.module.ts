import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {AdminComponent} from "./admin/admin.component";
import {DeleteComponent} from "./delete/delete.component";
import {UploadComponent} from "./upload/upload.component";
import {VerifyComponent} from "./verify/verify.component";
import {TeamComponent} from "./team/team.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  {path : 'admin' , component : AdminComponent},
  {path : 'delete' , component : DeleteComponent},
  {path : 'upload' , component : UploadComponent},
  {path : 'verify' , component : VerifyComponent},
  {path : 'team' , component : TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
