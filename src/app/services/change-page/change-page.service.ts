import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { first, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChangePageService {

  navigationPageChangeEvent: Subject<boolean> = new Subject();
  transitionPageChangeEvent: Subject<boolean> = new Subject();

  changePageTimeout: any;

  constructor(private navController: NavController) {}

  onChangePage(path: string) {

    this.navigationPageChangeEvent.next(true);

    this.transitionPageChangeEvent.pipe(first()).subscribe(async (pageInNavigation) => {

      if (pageInNavigation) {

        const routed = await this.navController.navigateForward(path);

        routed && this.navigationPageChangeEvent.next(false);
      }
    });
  }

}
