import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'randomuser';
  loading = true;
  userDetails: any = '';
  userInfo = { value: '', type: '' };

  constructor(readonly http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://randomuser.me/api/').subscribe(
      (response: any) => {
        this.userDetails = response?.results[0];
        this.userInfo = {
          value:
            this.userDetails?.name?.first + ' ' + this.userDetails?.name?.last,
          type: 'name',
        };
        this.loading = false;
      },
      (error) => {
        alert(error);
      }
    );
  }

  setValue(data: any) {
    this.userInfo = { value: data.value, type: data.type };
  }
}
