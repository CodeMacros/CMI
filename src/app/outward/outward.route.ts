import { Routes } from '@angular/router';
import { IndependentOutward } from './independent-outward/independent-outward';
import { TrackOutward } from './track-outward/track-outward';
import { EditOutward } from './edit-outward/edit-outward';
import { Outward } from './outward';


export const OUTWARD_ROUTES: Routes = [
    {
        path: '',
        component: Outward,
        children: [
            {
                path: 'independent',
                component: IndependentOutward,
            },
            {
                path: 'track',
                component: TrackOutward,
            },
            {
                path: 'edit',
                component: EditOutward,
            },
        ]
    }
]