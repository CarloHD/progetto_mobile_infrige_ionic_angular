export const texts: TextOBJ[] = [
  {
    void: '',
    welcome: "Benvenuto!",
    welcome_msg: "Questa app è ancora in fase di sviluppo!\<br\>\<br\> Inoltre l'app non conserva i dati che inserirai in alcun database, ma saranno salvati sul dispositivo.\<br\> Se verranno cancellati i dati dell'app, tutti i tuoi dati andranno persi!",
    cancel: "Annulla"
  },
  {
    void: '',
    welcome: "Welcome!",
    cancel: "Cancel",
    welcome_msg: "This app is still under development!\<br\>\<br\> Also, the app doesn't keep the data you enter in any database, but it will be saved on the device.\<br\>\<br\> If the app data is deleted, all your data will be lost!"
  }
];

export type TextOBJ = {
  void: string,
  welcome: string,
  cancel: string,
  welcome_msg: string;
};