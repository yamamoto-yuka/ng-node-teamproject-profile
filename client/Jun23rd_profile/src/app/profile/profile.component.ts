import { Component, OnInit } from '@angular/core';
import { Profile } from '../interfaces/interface';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {



  profile:Profile;

  constructor(private route:ActivatedRoute, private cs:CommonService) { }



  ngOnInit(): void {
    console.log(this.profile);
    let id:any = this.route.snapshot.paramMap.get("id");
    this.cs.getProfileGetById(id).subscribe(data =>{
      this.profile = data;
         console.log(this.profile);
    })
    // this.profile = this.cs.showProfile(id);
 
  }

}
