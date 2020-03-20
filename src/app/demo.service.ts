import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';




@Injectable({
    providedIn: 'root'
})
export class DemoService {
    data = [];
    derror = new Subject<string>();
    constructor(private http: HttpClient) { }

    createStore(postData: { id: string; name: string; email: string }) {

        this.http.post('https://demo2-ce3a1.firebaseio.com/post.json', postData,
            {
                observe: 'response'
            })
            .subscribe(responseData => {
                console.log(responseData)
            }, error => { this.derror.next(error) });

    }


    getData() {

        return this.http.
            get('https://jsonplaceholder.typicode.com/users/2', {
                headers: new HttpHeaders({ 'header': 'get()' }),
                params: new HttpParams().set('print', 'param')
            })

    }
    //  onRohitdata(){
    //      return this.http.get('3.6.169.31/api/v1/users/current_user_qrcode')
    //  }

    onDelete() {
        return this.http.delete('https://demo2-ce3a1.firebaseio.com/post.json');
    }
}
