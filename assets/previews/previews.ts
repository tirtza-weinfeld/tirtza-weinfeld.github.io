

import {Type} from '@angular/core';


export const PREVIEWS_COMPONENTS_MAP: Record<string, () => Promise<Type<unknown>>> = {
  ['pipes/power-booster.component.ts']: () => import('../../content/examples/pipes/power-booster.component').then(c => c.PowerBoosterComponent),

};
