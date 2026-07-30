import { Routes } from '@angular/router';
import { Inward } from './inward';
import { NewBusiness } from './new-business/new-business';
import { Renewal } from './renewal/renewal';
import { TrackEdit } from './track-edit/track-edit';
import { CorrectAWBNumber } from './correct-awbnumber/correct-awbnumber';




export const INWARD_ROUTES: Routes = [
    {
        path: 'new-business',
        component: NewBusiness,
    },
    {
        path: 'renewal',
        component: Renewal,
    },
    {
        path: 'track-edit',
        component: TrackEdit,
    },
    {
        path: 'correct-awb-number',
        component: CorrectAWBNumber,
    },

]