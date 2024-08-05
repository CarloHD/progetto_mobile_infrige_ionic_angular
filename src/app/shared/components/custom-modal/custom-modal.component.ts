import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { I18nService } from 'src/app/services/i18n/i18n.service';
import { IconFlagType, LanguagesEnum } from 'src/i18n/languages';
import { TextOBJ } from 'src/i18n/texts';

@Component( {
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: [ './custom-modal.component.scss' ],
  standalone: true,
  imports: [ CommonModule, IonicModule ]
} )
export class CustomModalComponent implements OnInit, OnDestroy {

  @Input() header?: keyof TextOBJ | undefined;
  @Input() text: keyof TextOBJ = 'void';
  @Input() buttons?: { text: keyof TextOBJ, handler?: () => any; }[] | undefined;
  @Input() extraData?: { languageSelector: boolean; };

  headerText: string | undefined;
  mainText: string | undefined;
  buttonsCustom: { text: string, handler?: () => any; }[] = [];
  dismissButtonText: string = 'ok';

  languageSelect: LanguagesEnum | undefined;

  switchLangSub: Subscription | undefined;

  constructor( private modalController: ModalController, private i18nService: I18nService ) {}

  ngOnInit() {
    this.switchLangSub = this.i18nService.changeLanguageEvent.subscribe( ( lang ) => {

      this.languageSelect = lang;

      if ( this.header ) {
        this.headerText = this.i18nService.getLangText( this.header );
      }
      this.mainText = this.i18nService.getLangText( this.text );

      if ( this.buttons ) {

        this.dismissButtonText = this.i18nService.getLangText( 'cancel' );

        this.buttonsCustom = this.buttons.map( button => { return { text: this.i18nService.getLangText( button.text ), handler: button.handler }; } );
      }




    } );


  }

  onDismiss() {
    this.modalController.dismiss();
  }

  onSwitchLang() {

    const newLang = this.i18nService.languageSelected === LanguagesEnum.IT ? LanguagesEnum.ENG : LanguagesEnum.IT;

    this.i18nService.changeLanguageEvent.next( newLang );

  }

  ngOnDestroy(): void {
    this.switchLangSub?.unsubscribe();
  }

}
