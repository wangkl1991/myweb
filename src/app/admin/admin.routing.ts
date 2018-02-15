import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AdminComponent } from './admin.component';
import { UserTableComponent } from './user-table/user-table.component'



const routes: Routes = [
    {
        path: 'admin',
        component:AdminComponent , 
        children: [
            {path: 'user-table', component: UserTableComponent},

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
export class AdminRoutingModule{}