import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { DetaailsComponent } from './detaails/detaails.component';


const routes: Routes = [
	{
		path: '',
		component: UsersComponent
	},
	{
		path: 'details/:id',
		component: DetaailsComponent
	},
	{
		path: 'posts',
		component: PostsComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
