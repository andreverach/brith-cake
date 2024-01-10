import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Howl } from 'howler';
@Component({
  selector: 'app-birth',
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.scss']
})
export class BirthComponent implements OnInit, OnDestroy {

  nameText: string = "";
  //messageText: string = "";

  private sound!: Howl;

  //lista de canciones
  path: string = "./../../assets/sounds/";
  songsList: string[] = [    
    'patadas.mp3',
    'cine.mp3',
    'vamonos.mp3',
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private el: ElementRef
  ){ }

  ngOnInit(): void {
    this.nameText = this.activatedRoute.snapshot.params['name'];
    //this.messageText = this.activatedRoute.snapshot.params['message'];    
    this.playMusic(1);

    // Agregar un manejador de eventos de clic al elemento principal del componente
    /* this.el.nativeElement.addEventListener('click', () => {
      this.reiniciarCancion(1);
    }); */
  }

  playMusic(_index: number) {    
    //const _index: number = Math.floor(Math.random() * 3);
    console.log("playMusic", _index)
    const song: string = this.path + this.songsList[_index];
    this.sound = new Howl({
      src: [song],
      autoplay: false,
    });
  }

  reiniciarCancion(_index: number): void {
    console.log("reiniciarCancion", _index)
    if (this.sound) {
      this.sound.stop();
    }
    this.playMusic(_index);
    // Detener y reiniciar la reproducción
    if (this.sound) {
      //this.sound.stop();
      this.sound.play();
    }
  }

  ngOnDestroy(): void {
    // Detener la reproducción al salir del componente
    if (this.sound) {
      this.sound.stop();
    }
  }

}
