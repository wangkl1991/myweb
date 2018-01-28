import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { PublicComponent } from '../home/public/public.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AuthComponent } from './auth.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';



const routes: Routes = [
    {
        path: 'auth',
        component: PublicComponent, 
        children: [
            {path: '', redirectTo: 'signin', pathMatch: 'full'},
            {path: 'signin', component: AuthComponent},
            {path: 'forgetpassword', component: ForgetpasswordComponent }

        ]   
    },
    
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AuthRoutingModule{}