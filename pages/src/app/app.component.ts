import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: "At the beach",
      url: "https://images.unsplash.com/photo-1495765505527-e0cea04a4829?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
     {
      title: "At the mountain",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
     {
      title: "At the school",
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
     {
      title: "At the city",
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
     {
      title: "At the safari",
      url: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2FmYXJpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
     {
      title: "At the beach",
      url: "https://images.unsplash.com/photo-1495765505527-e0cea04a4829?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
     {
      title: "At the mountain",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
     {
      title: "At the school",
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
     {
      title: "At the city",
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
     {
      title: "At the safari",
      url: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2FmYXJpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
   
  ];
  
  checkPaginationToDisplay(index: number){
    return Math.abs(this.currentPage - index) < 4;
  }
}
