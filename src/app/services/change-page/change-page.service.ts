import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subject } from 'rxjs';


@Injectable( {
  providedIn: 'root'
} )
export class ChangePageService {

  changePageEvent: Subject<boolean> = new Subject();

  changePageTimeout: any;

  constructor( private navController: NavController ) {}

  onChangePage( path: string ) {
    clearTimeout( this.changePageTimeout );
    this.changePageEvent.next( true );

    this.changePageTimeout = setTimeout( () => {
      this.navController.navigateForward( path ).then( () => {

        this.changePageEvent.next( false );
      } );
    }, 300 );
  }
}
