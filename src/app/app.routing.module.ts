import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { createUrlResolverWithoutPackagePrefix } from "@angular/compiler";

const routes:Routes=[
    {path : 'user',component:UserComponent},
    {path: 'login', component:LoginComponent},
    {path:  ' ',component:LoginComponent}
]; 

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ],
    declarations:[]
})

export class  AppRoutingModule { }
