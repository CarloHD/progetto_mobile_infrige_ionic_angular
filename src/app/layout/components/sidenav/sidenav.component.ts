import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChangePageService } from 'src/app/services/change-page/change-page.service';


@Component( {
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ],
  standalone: true,
  imports: [ IonicModule, RouterModule ]
} )
export class SidenavComponent implements OnInit {
  pageInChange: boolean = false;

  constructor( private changePageService: ChangePageService ) {}

  ngOnInit(): void {
    this.changePageService.changePageEvent.subscribe( ( value ) => { this.pageInChange = value; } );
  }
  onClickNav( path: string ) {

    if ( !this.pageInChange && location.pathname !== path ) {
      this.changePageService.onChangePage( path );
    }
  }

}
