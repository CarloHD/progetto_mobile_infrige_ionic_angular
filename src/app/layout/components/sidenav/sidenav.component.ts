import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChangePageService } from 'src/app/services/change-page/change-page.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule]
})
export class SidenavComponent {
  constructor(private changePageService: ChangePageService) {}

  onClickNav(path: string) {

    if (location.pathname !== path) {
      this.changePageService.onChangePage(path);
    }
  }

}
