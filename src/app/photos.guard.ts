import { CanActivateFn } from '@angular/router';

export const photosGuard: CanActivateFn = (route, state) => {
  return confirm("Want to see Photos?")
};
