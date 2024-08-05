import { Component, OnInit } from '@angular/core';

import { ModalService } from 'src/app/services/modal/modal.service';
import { ChangePageService } from 'src/app/services/change-page/change-page.service';


@Component({
  selector: 'app-full',
  templateUrl: './full.page.html',
  styleUrls: ['./full.page.scss'],

})
export class FullPage implements OnInit {

  pageChanging: boolean = false;

  constructor(private changePageService: ChangePageService, private modalService: ModalService) {}

  ngOnInit(): void {

    // this.modalService.showModal( {
    //   header: 'welcome',
    //   text: 'welcome_msg',
    //   extraData: { languageSelector: true }
    // } );


    this.changePageService.changePageEvent.subscribe((value) => { this.pageChanging = value; });
  }



}
