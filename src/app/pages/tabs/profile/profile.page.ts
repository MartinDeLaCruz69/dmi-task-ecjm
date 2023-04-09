import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from '../../../services/utils.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user = {} as User

  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUser()
  }

  getUser() {
    return this.user = this.utilsSvc.getElementFromLocalStorage('user')
  }

  signOut() {
    this.utilsSvc.presentAlert({
      header: 'Cerrar Sesión',
      message: '¿Quiéres <strong>cerrar sesión?</strong>',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',

        }, {
          text: 'Si, cerrar',
          handler: () => {
            this.firebaseSvc.signOut();
          }
        }
      ]
    })
  }
}
