import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BlocksComponent } from './blocks/blocks.component';
import { CardsComponent } from './cards/cards.component';
import { FormsComponent } from './forms/forms.component';
import { PiercingComponent } from './piercing/piercing.component';

export const routes: Routes = [

    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'blocks',
        component: BlocksComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'piercing',
        component: PiercingComponent
    },
    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRountingModule {}