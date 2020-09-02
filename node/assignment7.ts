

// html 

<i *ngFor="let star of stars" [class]="iconClass[star]"></i>

// ts method

@Input() rating: number;

iconClass = {
  0: '',
  0.5: 'fa fa-star-half-o',
  1: 'fa fa-star'
}

stars: number[] = [0, 0, 0, 0, 0];

fillStars(){
    
    var starsToFill = Math.ceil(this.rating * 2)/2;
    var i = 0;
    while(starsToFill > 0.5){
      this.stars[i] = 1;
      i++;
      console.log("i",i)
      starsToFill--;
    }
    if(starsToFill === 0.5){
      this.stars[i] = 0.5;
    }