import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Components
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { BlogComponent } from './blog/blog.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes =[

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'auth', component:AuthComponent},
    {path: 'user', component: UserComponent},
    {path: 'forgetpassword', component: ForgetpasswordComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'admin', component: AdminComponent}

];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}
