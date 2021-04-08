class AlexSlider{


    constructor(selector, options){
        this.$el = document.querySelector(selector);
        this.slideIndex = options.slideIndex;
        this.sliderWrap = document.querySelector(options.wrap);
        this.slides = document.querySelectorAll(options.items);
        this.dots = options.dots;
        this.leftArrow = document.querySelector(options.arrowLeft);
        this.rightArrow = document.querySelector(options.arrowRight);
        if(options.dots){
            this.slidesDots = document.querySelector(options.dotsWrap);
            this.dotsCreate();
            this.slidesDot = document.querySelectorAll('.slider__dot')
        }
        this.arrowsClick();
        this.currentSlide(1);
    }
    Log(){
        console.log( this.slides);
    }
    plusSlides(n){
        this.showSlides(this.slideIndex += n);
    }
    currentSlide(n){
        this.showSlides(this.slideIndex = n);
    }
    clearActive(){
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
            if(this.dots){
                this.slidesDot[i].classList.remove('slider__dot--active');
            }
          }
    }
    arrowsClick(){
        this.leftArrow.addEventListener('click', evt => {
            evt.preventDefault();
            this.plusSlides(-1)
        })
        this.rightArrow.addEventListener('click', evt => {
            evt.preventDefault();
            this.plusSlides(1)
        })
        
    }
    dotsClick(){
        if(this.dots){
            for(let i = 0; i < this.slides.length; i++){
                this.slidesDot[i].addEventListener('click', evt => {
                    evt.preventDefault();
                    this.currentSlide(i+1);
                })
            }
        }
    }
    dotsCreate(){
        for (let j = 0; j < this.slides.length; j++) {
            this.slidesDots.innerHTML += `<span class="slider__dot"></span>`;
          }
    }
    addActive(){
        this.slides[this.slideIndex - 1].style.display = "flex";
        if(this.dots){
            this.slidesDot[this.slideIndex - 1].classList.add('slider__dot--active');
    
        }
    }
    showSlides(n) {
        let i;
    
        if (n > this.slides.length) {
          this.slideIndex = 1;
        }
    
        if (n < 1) {
          this.slideIndex = this.slides.length;
        }
        this.clearActive();
        this.addActive();
        this.dotsClick();
        
      }
}

