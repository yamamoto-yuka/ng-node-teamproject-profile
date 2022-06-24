import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  // This is Dummy data from Fron-end Team
  // profileData:Profile [] = [
  //   {
  //     ID:1,
  //     first_name:"Mike",
  //     last_name:"Andrew",
  //     user_photo:"https://www.directive.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg",
  //     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  //   },
  //   {
  //     ID:2,
  //     first_name:"Mary",
  //     last_name:"Joe",
  //     user_photo:"https://www.directive.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg",
  //     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  //   },
  //   {
  //     ID:3,
  //     first_name:"John",
  //     last_name:"Doe",
  //     user_photo:"https://www.directive.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg",
  //     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  //   }
  // ]
  
  private URL = 'http://localhost:4400';

  constructor(private http:HttpClient) { }

  getProfileGetById(id:any){
    return this.http.get<[Profile]>(this.URL + '/' + id);
  }

  // This method is for Testing on Front-end Team
  // showProfile(id:any) {
  //   let profile = this.profileData.filter(x => x.ID == id );
  //   console.log(profile);
  //   return profile[0];
  // }

}
