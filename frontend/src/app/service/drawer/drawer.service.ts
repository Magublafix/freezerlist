import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, take } from 'rxjs';
import { Drawer } from '../../models/drawer';
import { AppModule } from '../../app.module';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private path = '/api/drawers';

  constructor(private http: HttpClient) {}
  
  getDrawers(): Observable<any> {
    return this.http.get<Drawer[]>(this.path);
  }

  getDrawer(id: number): Observable<any> {
    return this.http.get<Drawer>(this.path + "/" + id)
  }  
}
