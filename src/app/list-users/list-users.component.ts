import { Component, OnInit } from '@angular/core';



@Component({

  selector: 'app-list-users',

  templateUrl: './list-users.component.html',

  styleUrls: ['./list-users.component.css']

})

export class ListUsersComponent implements OnInit {



  constructor() { }



  ngOnInit(): void {

  }
  //users!:any;

  //users = ["manisha","Kiranmai","ramesh"];

  users=[

    {id:101, name:"manisha", email:"m@gmail.com"},
  
    {id:102, name:"kiranmai", email:"k@gmail.com"},
  
    {id:103, name:"ramesh", email:"r@gmail.com"},
  
  ];
  
  
  
  //Next Task:ListTaskComponent
  
  tasks = [
  
    {id:1, name:"Install Java", status:"COMPLETED"},
  
    {id:2, name:"Install NodeJS", status:"PENDING"},
  
  ]
  
    deleteUser(){
  
      alert("Successfully Deleted");
  
    }
  
  
  
  }
