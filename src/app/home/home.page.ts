import {Component, OnInit} from '@angular/core';

import {CruzrSdk} from '../../../../cruzrsdk';

import {Howl, Howler} from 'howler';

var sound = new Howl({
  src: ['sound.mp3']
});



@Component({

  selector: 'app-home',

  templateUrl: './home.page.html',

  styleUrls: ['./home.page.scss'],

})

export class HomePage implements OnInit {



  // actionsNames = ['pose1', 'pose2', 'pose3', 'hug', 'shankhand', 'goodbye', 'talk1', 'talk2', 'talk3', 'talk4', 'talk5', 'talk6', 'talk7', 'talk8', 'nod', 'applause', 'zhuatou', 'guideleft', 'guideright', 'cute', 'fendou', 'zhanggao', 'swingarm', 'searching', 'fadai', 'tiaowang', 'longzhuashou', 'baohu', 'surprise', 'zhilu', 'shy', 'command', 'commandover', 'walk', 'reset'];

  // selectedAction = 'pose1';



  constructor() {

    //setTimeout(this.hello, 1500);

    //setTimeout(this.photo, 20000);

    //setInterval(this.hello, 100000);

    //setInterval(this.photo, 150000);  

  }



  ngOnInit(): void {}

  player = new Howl({

    src: ['../../assets/friday.mp3']

  });


  dance(){

    //play music

    

    this.player.play();



  
    CruzrSdk.run({action: 'pose1'});
    CruzrSdk.run({action: 'pose2'});
    CruzrSdk.run({action: 'pose3'});
}

  stop(){
    CruzrSdk.stopRun();
    this.player.stop();
    // CruzrSdk.stopRun();
  }

  valami(){
    CruzrSdk.dance({danceName: 'Dura'});
  }



 



  stopAction() {

    CruzrSdk.stopRun();

  }



}