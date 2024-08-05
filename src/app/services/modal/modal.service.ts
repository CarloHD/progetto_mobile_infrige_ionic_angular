import { Injectable, } from '@angular/core';
import { ModalController, } from '@ionic/angular';
import { CustomModalComponent } from 'src/app/shared/components/custom-modal/custom-modal.component';

import { TextOBJ } from 'src/i18n/texts';

@Injectable( { providedIn: 'root' } )
export class ModalService {

  constructor( private modalController: ModalController ) {

  }

  private async createModal( props?: ModalProps ) {

    return await this.modalController.create( { component: CustomModalComponent, componentProps: props, cssClass: [ 'custom_modal' ] } );

  }

  public async showModal( props?: ModalProps ) {

    const modal = await this.createModal( props );
    modal.present();
  }

}

export type ModalProps = {
  header?: keyof TextOBJ,
  text: keyof TextOBJ,
  buttons?: { text: keyof TextOBJ, handler?: () => any; }[],
  extraData?: { languageSelector: boolean; };
};