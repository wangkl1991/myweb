import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Components
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';


const routes: Routes =[

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'auth', component:AuthComponent},
    {path: 'user', component: UserComponent},
    
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
