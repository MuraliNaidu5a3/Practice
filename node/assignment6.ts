 add() {
    if (this.imageWidth <this.maxWidth){
    this.imageWidth = this.imageWidth + this.delta;
    }
  }

  substract() {
    if (this.imageWidth > this.minWidth){
    this.imageWidth = this.imageWidth - this.delta;
    }
  }