import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
const apId = 'e3be8a0e5f127651c42a8cdf96e22e10'
@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http: HttpClient) { }

  //llamams a nuestra api pasandole por parametro la ciudad que es la que se va a consultar su tiempo
  getEstadoTiempo(ciudad: String){
    const url = `${urlBase}?q=${ciudad}&appid=${apId}`;
    return this.http.get(url);
  }

}
