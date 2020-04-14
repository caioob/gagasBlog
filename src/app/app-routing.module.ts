import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StuffComponent } from './stuff/stuff.component';
import{ PostPageComponent } from './post-page/post-page.component'



const routes: Routes = [
  {path:'contact', component: ContactsComponent},
  {path:'home', component: HomeComponent },
  {path:'stuff', component: StuffComponent },
  {path:'post/:id', component: PostPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', component:  NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
