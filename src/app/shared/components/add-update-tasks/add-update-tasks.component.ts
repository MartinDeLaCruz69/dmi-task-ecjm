import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemReorderEventDetail } from '@ionic/angular';
import { Item, Task } from 'src/app/models/task.model';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-add-update-tasks',
  templateUrl: './add-update-tasks.component.html',
  styleUrls: ['./add-update-tasks.component.scss'],
})
export class AddUpdateTasksComponent implements OnInit {

  @Input() task: Task
  user = {} as User

  form = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required, Validators.minLength(4)]),
    items: new FormControl([], [Validators.required, Validators.minLength(1)]),
  })

  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
  ) { }

  ngOnInit() {
    this.user = this.utilsSvc.getElementFromLocalStorage('user')

    if (this.task) {
      this.form.setValue(this.task);
      this.form.updateValueAndValidity()
    }

  }

  getPercentage(){
    return this.utilsSvc.getPercentage(this.form.value as Task)
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    this.form.value.items = ev.detail.complete(this.form.value.items);
    this.form.updateValueAndValidity();
  }

  removeItem(index: number){
    this.form.value.items.splice(index, 1);
    this.form.updateValueAndValidity();
  }

  createItem(){
    this.utilsSvc.presentAlert({
      header: 'Nueva Actividad',
      backdropDismiss: false,
      inputs: [
        {
          name: 'name',
          type: 'textarea',
          placeholder: 'Hacer algo...'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',

        }, {
          text: 'Agregar',
          handler: (res) => {

            let item: Item = {name: res.name, completed: false}
            this.form.value.items.push(item);
            this.form.updateValueAndValidity();

          }
        }
      ]
    })
  }
}
