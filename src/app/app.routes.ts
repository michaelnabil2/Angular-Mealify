import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Team } from './team/team';
import { Meals} from './meals/meals';
import { Contacts } from './contacts/contacts';
import { SeaFood } from './sea-food/sea-food';
import { Breakfast } from './breakfast/breakfast';
import { Pasta } from './pasta/pasta';
import { Nopage } from './nopage/nopage';

export const routes: Routes = [
{path: '' , redirectTo:'home', pathMatch: "full"},
{path: 'home' , component: Home , title: 'Home'},
{path: 'about' , component: About , title : 'About'},
{path: 'team' , component: Team , title: 'Team'},
{path: 'meals' , component: Meals , title: 'Meals',
    children:[
        {path: '' , redirectTo:'seaFood' , pathMatch:"full" },
        {path: 'seaFood' , component: SeaFood, title: 'Seafood'},
        {path: 'breakfast' , component: Breakfast , title: 'Pizza'},
        {path: 'pasta' , component: Pasta , title: 'Pasta'},
    ]
},
{path: 'contact' , component: Contacts , title: 'Contacts'},
{path: '**' , component: Nopage }

];
