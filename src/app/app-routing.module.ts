import { HomeComponent } from './components/home/home.component';
import { StuCtrComponent } from './components/stu-ctr/stu-ctr.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'ctr',
        component: StuCtrComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
