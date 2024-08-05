import { Injectable } from '@angular/core';
import { TextOBJ, texts } from '../../../i18n/texts';
import { LanguagesEnum } from 'src/i18n/languages';
import { BehaviorSubject } from 'rxjs';

@Injectable( { providedIn: 'root' } )

export class I18nService {
  private _texts = texts;
  public languageSelected: LanguagesEnum = LanguagesEnum.ENG;

  public changeLanguageEvent: BehaviorSubject<LanguagesEnum> = new BehaviorSubject( this.languageSelected );

  constructor() {
    this.changeLanguageEvent.subscribe( value => this.languageSelected = value );
  }

  public getLangText( text: keyof TextOBJ ): string {
    return this._texts[ this.languageSelected ][ text ];
  }

}


