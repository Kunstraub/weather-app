import { Component } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  api_key = 'ba1253906c36446bb4eb9d74923a7f1d';
  url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=ba1253906c36446bb4eb9d74923a7f1d';
  ipAddress = '';
  city = '';
  region = '';
  country = '';

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.getGeolocationData();
}


  getGeolocationData()
  {
    this.http.get<any>(this.url).subscribe((res:any)=>{
      console.log(res);
      this.ipAddress = res.ip_address;
      this.city = res.city;
      this.region = res.region;
      this.country = res.country;
    },
    (error) => {
      console.error(error);
    }
    );
  }

}
