import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DemoApi';
  data: any = [];
  error = null;


  constructor(private http: HttpClient, private demoservice: DemoService) {

  }
  ngOnInit() {
    this.demoservice.derror.subscribe(errorMassage => {
      this.error = errorMassage;
      console.log(errorMassage)
    });
  }
  create(postData: { id: any; name: string; email: string }) {
    this.demoservice.createStore(postData)
  }

  onGetdata() {
    this.demoservice.getData().subscribe(post => {
      this.data = post;
      console.log("new" + this.data)
    })
  }
  onnewdata() {
    this.http.get('3.6.169.31/api/v1/users/current_user_qrcode').subscribe(d => { console.log(d) }, error => {
      this.error = error.message;

      console.log(error);
    });

  }

  isDelete() {
    this.demoservice.onDelete().subscribe()
  }
}