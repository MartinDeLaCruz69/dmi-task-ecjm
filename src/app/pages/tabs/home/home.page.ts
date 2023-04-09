import { Component, OnInit } from '@angular/core';
import { Task } from "src/app/models/task.model";
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateTasksComponent } from 'src/app/shared/components/add-update-tasks/add-update-tasks.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  tasks: Task[] = [
    {
      id: '1',
      title: 'Autenticación con Google',
      description: 'Cear una función que permita autenticar al usuario con Google',
      items: [
        { name: 'Actividad 1', completed: true },
        { name: 'Actividad 2', completed: false },
        { name: 'Actividad 3', completed: false },
      ]
    },
    {
      id: '2',
      title: 'Autenticación con Google',
      description: 'Cear una función que permita autenticar al usuario con Google',
      items: [
        { name: 'Actividad 1', completed: true },
        { name: 'Actividad 2', completed: false },
        { name: 'Actividad 3', completed: false },
      ]
    },
    {
      id: '3',
      title: 'Autenticación con Google',
      description: 'Cear una función que permita autenticar al usuario con Google',
      items: [
        { name: 'Actividad 1', completed: true },
        { name: 'Actividad 2', completed: false },
        { name: 'Actividad 3', completed: false },
      ]
    },
    {
      id: '4',
      title: 'Autenticación con Google',
      description: 'Cear una función que permita autenticar al usuario con Google',
      items: [
        { name: 'Actividad 1', completed: true },
        { name: 'Actividad 2', completed: false },
        { name: 'Actividad 3', completed: false },
      ]
    }
  ]
  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
  ) { }

  ngOnInit() {
    this.addOrUpdateTask()
  }


  getPercentage(task: Task){
    return this.utilsSvc.getPercentage(task)
  }

  addOrUpdateTask(task?: Task){
    this.utilsSvc.presentModal({
      component: AddUpdateTasksComponent,
      componentProps: { task },
      cssClass: 'add-update-modal'
    })
  }

}
