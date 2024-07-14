import { Routes } from '@angular/router';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { TeamComponent } from './team/team.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestComponent } from './test/test.component';
export const routes: Routes = [
    { path:'team', component: TeamComponent } ,
    { path:'partenaire', component: PartenaireComponent },
    { path: 'accueil', component: LandingPageComponent },
    { path: 'test', component: TestComponent }
];
