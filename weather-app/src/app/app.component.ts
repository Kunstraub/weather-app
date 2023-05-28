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
  url = 'https://ipgeolocation.abstractapi.com/v1/?api_key='+this.api_key;
  ipAddress = '';
  city = '';
  region = '';
  country = '';
  weather_api_key = '67bff4d8240443f29d3102829232805'
  base_url = 'http://api.weatherapi.com/v1/current.json'
  location = 'Cologne';

  constructor(private http: HttpClient){}

  ngOnInit() {
    // this.getGeolocationData();
    this.getWeatherInformation();
}

getWeatherInformation(){
  const url = `${this.base_url}?key=${this.weather_api_key}&q=${this.location}`;
  this.http.get<any>(url).subscribe( response => {
    console.log(response);
  })
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
