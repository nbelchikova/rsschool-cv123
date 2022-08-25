//переменные
let difficulty2 = document.getElementById('difficulty2');
let difficulty1 = document.getElementById('difficulty1');
let difficulty3 = document.getElementById('difficulty3');
let difficulty0 = document.getElementById('difficulty0');
let difficulty4 = document.getElementById('difficulty4');
let card1 = document.getElementById('ancient-card1');
let card2 = document.getElementById('ancient-card2');
let card3 = document.getElementById('ancient-card3');
let card4 = document.getElementById('ancient-card4');
let green1= document.getElementById('1_green');
let brown1= document.getElementById('1_brown');
let blue1= document.getElementById('1_blue');
let green2= document.getElementById('2_green');
let brown2= document.getElementById('2_brown');
let blue2= document.getElementById('2_blue');
let green3= document.getElementById('3_green');
let brown3= document.getElementById('3_brown');
let blue3= document.getElementById('3_blue');
let last= document.getElementById('last');
let deck= document.getElementById('deck');
const cardsBlue = ['assets/MythicCards/blue/blue1.png','assets/MythicCards/blue/blue2.png','assets/MythicCards/blue/blue3.png','assets/MythicCards/blue/blue4.png','assets/MythicCards/blue/blue5.png','assets/MythicCards/blue/blue6.png','assets/MythicCards/blue/blue7.png','assets/MythicCards/blue/blue8.png','assets/MythicCards/blue/blue9.png','assets/MythicCards/blue/blue10.png','assets/MythicCards/blue/blue11.png','assets/MythicCards/blue/blue12.png'];
const cardsBlue1 = ['assets/MythicCards/blue/blue3.png','assets/MythicCards/blue/blue4.png','assets/MythicCards/blue/blue5.png','assets/MythicCards/blue/blue7.png','assets/MythicCards/blue/blue9.png','assets/MythicCards/blue/blue10.png','assets/MythicCards/blue/blue11.png','assets/MythicCards/blue/blue12.png']; 
const cardsBlue0 = ['assets/MythicCards/blue/blue3.png','assets/MythicCards/blue/blue4.png','assets/MythicCards/blue/blue5.png','assets/MythicCards/blue/blue10.png']; 
const cardsBlue2 = ['assets/MythicCards/blue/blue1.png','assets/MythicCards/blue/blue2.png','assets/MythicCards/blue/blue6.png','assets/MythicCards/blue/blue7.png','assets/MythicCards/blue/blue8.png','assets/MythicCards/blue/blue9.png','assets/MythicCards/blue/blue11.png','assets/MythicCards/blue/blue12.png'];
const cardsBlue3 = ['assets/MythicCards/blue/blue1.png','assets/MythicCards/blue/blue2.png','assets/MythicCards/blue/blue6.png','assets/MythicCards/blue/blue8.png'];
const cardsBrown =['assets/MythicCards/brown/brown1.png','assets/MythicCards/brown/brown2.png','assets/MythicCards/brown/brown3.png','assets/MythicCards/brown/brown4.png','assets/MythicCards/brown/brown5.png','assets/MythicCards/brown/brown6.png','assets/MythicCards/brown/brown7.png','assets/MythicCards/brown/brown8.png','assets/MythicCards/brown/brown9.png','assets/MythicCards/brown/brown10.png','assets/MythicCards/brown/brown11.png','assets/MythicCards/brown/brown12.png','assets/MythicCards/brown/brown13.png','assets/MythicCards/brown/brown14.png','assets/MythicCards/brown/brown15.png','assets/MythicCards/brown/brown16.png','assets/MythicCards/brown/brown17.png','assets/MythicCards/brown/brown18.png','assets/MythicCards/brown/brown19.png','assets/MythicCards/brown/brown20.png','assets/MythicCards/brown/brown21.png',];
const cardsBrown1 =['assets/MythicCards/brown/brown1.png','assets/MythicCards/brown/brown2.png','assets/MythicCards/brown/brown3.png','assets/MythicCards/brown/brown4.png','assets/MythicCards/brown/brown5.png','assets/MythicCards/brown/brown11.png','assets/MythicCards/brown/brown12.png','assets/MythicCards/brown/brown13.png','assets/MythicCards/brown/brown14.png','assets/MythicCards/brown/brown15.png','assets/MythicCards/brown/brown16.png','assets/MythicCards/brown/brown17.png','assets/MythicCards/brown/brown18.png','assets/MythicCards/brown/brown19.png','assets/MythicCards/brown/brown20.png','assets/MythicCards/brown/brown21.png',];
const cardsBrown0 =['assets/MythicCards/brown/brown11.png','assets/MythicCards/brown/brown12.png','assets/MythicCards/brown/brown13.png','assets/MythicCards/brown/brown14.png','assets/MythicCards/brown/brown15.png','assets/MythicCards/brown/brown16.png','assets/MythicCards/brown/brown17.png','assets/MythicCards/brown/brown18.png','assets/MythicCards/brown/brown21.png',];
const cardsBrown2 =['assets/MythicCards/brown/brown1.png','assets/MythicCards/brown/brown2.png','assets/MythicCards/brown/brown3.png','assets/MythicCards/brown/brown4.png','assets/MythicCards/brown/brown5.png','assets/MythicCards/brown/brown6.png','assets/MythicCards/brown/brown7.png','assets/MythicCards/brown/brown8.png','assets/MythicCards/brown/brown9.png','assets/MythicCards/brown/brown10.png','assets/MythicCards/brown/brown15.png','assets/MythicCards/brown/brown16.png','assets/MythicCards/brown/brown17.png','assets/MythicCards/brown/brown18.png','assets/MythicCards/brown/brown19.png','assets/MythicCards/brown/brown20.png'];
const cardsBrown3 =['assets/MythicCards/brown/brown1.png','assets/MythicCards/brown/brown2.png','assets/MythicCards/brown/brown3.png','assets/MythicCards/brown/brown4.png','assets/MythicCards/brown/brown6.png','assets/MythicCards/brown/brown7.png','assets/MythicCards/brown/brown8.png','assets/MythicCards/brown/brown9.png','assets/MythicCards/brown/brown10.png'];
const cardsGreen = ['assets/MythicCards/green/green1.png','assets/MythicCards/green/green2.png','assets/MythicCards/green/green3.png','assets/MythicCards/green/green4.png','assets/MythicCards/green/green5.png','assets/MythicCards/green/green6.png','assets/MythicCards/green/green7.png','assets/MythicCards/green/green8.png','assets/MythicCards/green/green9.png','assets/MythicCards/green/green10.png','assets/MythicCards/green/green11.png','assets/MythicCards/green/green12.png','assets/MythicCards/green/green13.png','assets/MythicCards/green/green14.png','assets/MythicCards/green/green15.png','assets/MythicCards/green/green16.png','assets/MythicCards/green/green17.png','assets/MythicCards/green/green18.png',]
const cardsGreen1 = ['assets/MythicCards/green/green1.png','assets/MythicCards/green/green7.png','assets/MythicCards/green/green8.png','assets/MythicCards/green/green9.png','assets/MythicCards/green/green10.png','assets/MythicCards/green/green11.png','assets/MythicCards/green/green12.png','assets/MythicCards/green/green13.png','assets/MythicCards/green/green14.png','assets/MythicCards/green/green15.png','assets/MythicCards/green/green16.png','assets/MythicCards/green/green17.png','assets/MythicCards/green/green18.png',]
const cardsGreen0 = ['assets/MythicCards/green/green1.png','assets/MythicCards/green/green12.png','assets/MythicCards/green/green15.png','assets/MythicCards/green/green16.png','assets/MythicCards/green/green17.png','assets/MythicCards/green/green18.png',]
const cardsGreen2 = ['assets/MythicCards/green/green2.png','assets/MythicCards/green/green3.png','assets/MythicCards/green/green4.png','assets/MythicCards/green/green5.png','assets/MythicCards/green/green6.png','assets/MythicCards/green/green7.png','assets/MythicCards/green/green8.png','assets/MythicCards/green/green9.png','assets/MythicCards/green/green10.png','assets/MythicCards/green/green11.png','assets/MythicCards/green/green13.png','assets/MythicCards/green/green14.png','assets/MythicCards/green/green15.png']
const cardsGreen3 = ['assets/MythicCards/green/green2.png','assets/MythicCards/green/green3.png','assets/MythicCards/green/green4.png','assets/MythicCards/green/green5.png','assets/MythicCards/green/green6.png','assets/MythicCards/green/green7.png']

function randomNumber (from,to,n) {
  let result = [...Array(to-from+1).keys()].map(i=>i+from) // range
  .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), []) // shuffle
  .slice(0, n); // slice n

 return result;
}
let arrNew1=[];
let arrNew2=[];
let arrNew3=[];
let number=0;

function getCard1() {
    
  const img= new Image();
  
  img.src=arrNew1[number];
  number++;
  last.style.backgroundImage = `url(${img.src})`; 
  
}

    document.addEventListener("click", function(e) {
    
        // стадии 
        
    // difficulties
    if  (e.target.id ==='difficulty0') {
         
        difficulty0.classList.toggle('active'); 
        difficulty1.classList.remove('active'); 
        difficulty2.classList.remove('active'); 
        difficulty3.classList.remove('active');
        difficulty4.classList.remove('active');
     
        document.addEventListener("click", function(с) {

            // стадии 
        
        // difficulties
            if  (с.target.id ==='ancient-card1') {
               
                let green=randomNumber (0, 5, 4 );
                let brown=randomNumber (0, 8, 9 );
                let blue= randomNumber (0, 3, 2 );
        
                arrNew1.push(cardsBrown0[brown[1]]);
                arrNew1.push(cardsBlue0[blue[0]]);
                arrNew1.push(cardsBrown0[brown[0]]);
                arrNew1.push(cardsBlue0[blue[1]]);
        
                arrNew2.push(cardsBrown0[brown[2]]);
                arrNew2.push(cardsGreen0[green[0]]);
                arrNew2.push(cardsBrown0[brown[4]]);
                arrNew2.push(cardsBrown0[brown[3]]);
        
                arrNew3.push(cardsGreen0[green[1]]);
                arrNew3.push(cardsBrown0[brown[8]]);
                arrNew3.push(cardsBrown0[brown[5]]);
                arrNew3.push(cardsBrown0[brown[6]]);
                arrNew3.push(cardsGreen0[green[2]]);
                arrNew3.push(cardsBrown0[brown[7]]);
                arrNew3.push(cardsGreen0[green[3]]);
                
                
                
                Array.prototype.push.apply(arrNew1,arrNew2);
                Array.prototype.push.apply(arrNew1,arrNew3);
               
                document.addEventListener("click", function(m) {
                    
                    if  (m.target.id ==='deck' ) {
                        
                        getCard1();
                        
                        console.log(number)
          
                    }
                
                  });
                
          
            }
            if  (с.target.id ==='ancient-card2') {
                
                green=randomNumber (0, 5, 5 );
                brown=randomNumber (0, 8, 9 );
                blue= randomNumber (0, 3, 2 );
        
                arrNew1.push(cardsBrown0[brown[1]]);
                arrNew1.push(cardsBlue0[blue[0]]);
                arrNew1.push(cardsBrown0[brown[0]]);
                
                arrNew2.push(cardsBrown0[brown[2]]);
                arrNew2.push(cardsGreen0[green[0]]);
                arrNew2.push(cardsBrown0[brown[4]]);
                arrNew2.push(cardsBrown0[brown[3]]);
                arrNew2.push(cardsGreen0[green[1]]);
                arrNew2.push(cardsBlue0[blue[1]]);
         
                arrNew3.push(cardsBrown0[brown[8]]);
                arrNew3.push(cardsBrown0[brown[5]]);
                arrNew3.push(cardsBrown0[brown[6]]);
                arrNew3.push(cardsGreen0[green[2]]);
                arrNew3.push(cardsBrown0[brown[7]]);
                arrNew3.push(cardsGreen0[green[3]]);
                arrNew3.push(cardsGreen0[green[4]]);
        
                Array.prototype.push.apply(arrNew1,arrNew2);
                Array.prototype.push.apply(arrNew1,arrNew3);
               
                document.addEventListener("click", function(m) {
                    
                    if  (m.target.id ==='deck' ) {
                      
                        getCard1();
                        
                        console.log(number)
           
                    }
                
                  });
             
                  
            }
            
            if  (с.target.id ==='ancient-card3') {
                 
                green=randomNumber (0, 5, 6 );
                brown=randomNumber (0, 8, 8 );
                blue= randomNumber (0, 3, 2 );
         
                arrNew1.push(cardsBrown0[brown[1]]);
                arrNew1.push(cardsBlue0[blue[0]]);
                arrNew1.push(cardsBrown0[brown[0]]);
                arrNew1.push(cardsGreen0[green[0]]);
        
                arrNew2.push(cardsBrown0[brown[2]]);
                arrNew2.push(cardsBrown0[brown[3]]);
                arrNew2.push(cardsGreen0[green[1]]);
                arrNew2.push(cardsBlue0[blue[1]]);
                arrNew2.push(cardsGreen0[green[2]]);
                arrNew2.push(cardsGreen0[green[3]]);
        
                arrNew3.push(cardsGreen0[green[5]]);
                arrNew3.push(cardsBrown0[brown[7]]);
                arrNew3.push(cardsBrown0[brown[5]]);
                arrNew3.push(cardsBrown0[brown[6]]);
                arrNew3.push(cardsBrown0[brown[4]]);
                arrNew3.push(cardsGreen0[green[4]]);
                
                Array.prototype.push.apply(arrNew1,arrNew2);
                Array.prototype.push.apply(arrNew1,arrNew3);
               
                document.addEventListener("click", function(m) {
        
                    if  (m.target.id ==='deck' ) {
                      
                        getCard1();
                        
                        console.log(number)
           
                    }
                
                  });
                   
                
            }
            if  (с.target.id ==='ancient-card4') {
                 
                green=randomNumber (0, 5, 5 );
                brown=randomNumber (0, 8, 9 );
                blue= randomNumber (0, 3, 2 );
        
                arrNew1.push(cardsBrown0[brown[1]]);
                arrNew1.push(cardsBlue0[blue[0]]);
                arrNew1.push(cardsBrown0[brown[0]]);
                arrNew1.push(cardsGreen0[green[0]]);
        
                arrNew2.push(cardsBrown0[brown[2]]);
                arrNew2.push(cardsBrown0[brown[3]]);
                arrNew2.push(cardsGreen0[green[1]]);
                arrNew2.push(cardsBlue0[blue[1]]);
                arrNew2.push(cardsGreen0[green[2]]);
                arrNew2.push(cardsBrown0[brown[4]]);
                
                arrNew3.push(cardsGreen0[green[3]]);
                arrNew3.push(cardsBrown0[brown[7]]);
                arrNew3.push(cardsBrown0[brown[5]]);
                arrNew3.push(cardsBrown0[brown[6]]);
                arrNew3.push(cardsGreen0[green[4]]);
                arrNew3.push(cardsBrown0[brown[8]]);
                
                Array.prototype.push.apply(arrNew1,arrNew2);
                Array.prototype.push.apply(arrNew1,arrNew3);
               
                document.addEventListener("click", function(m) {
        
                    if  (m.target.id ==='deck' ) {
                        
                        getCard1();
                        
                        console.log(number)
         
                    }
                
                  });
                  
            }
        
          });
              
    }
    if  (e.target.id ==='difficulty4') {
        difficulty4.classList.toggle('active'); 
        difficulty1.classList.remove('active'); 
        difficulty3.classList.remove('active'); 
        difficulty0.classList.remove('active');
        difficulty2.classList.remove('active');

        document.addEventListener("click", function(с) {

            // стадии 
        
        // difficulties
            if  (с.target.id ==='ancient-card1') {
                number=0;
                let green=randomNumber (0, 5, 4 );
                let brown=randomNumber (0, 8, 9 );
                let blue= randomNumber (0, 3, 2 );
        
                arrNew1.push(cardsBrown3[brown[1]]);
                arrNew1.push(cardsBlue3[blue[0]]);
                arrNew1.push(cardsBrown3[brown[0]]);
                arrNew1.push(cardsBlue3[blue[1]]);
        
                arrNew2.push(cardsBrown3[brown[2]]);
                arrNew2.push(cardsGreen3[green[0]]);
                arrNew2.push(cardsBrown3[brown[4]]);
                arrNew2.push(cardsBrown3[brown[3]]);
        
                arrNew3.push(cardsGreen3[green[1]]);
                arrNew3.push(cardsBrown3[brown[8]]);
                arrNew3.push(cardsBrown3[brown[5]]);
                arrNew3.push(cardsBrown3[brown[6]]);
                arrNew3.push(cardsGreen3[green[2]]);
                arrNew3.push(cardsBrown3[brown[7]]);
                arrNew3.push(cardsGreen3[green[3]]);
                
                
                Array.prototype.push.apply(arrNew1,arrNew2);
                Array.prototype.push.apply(arrNew1,arrNew3);
               
                document.addEventListener("click", function(m) {
        
                    if  (m.target.id ==='deck' ) {
                        
                        getCard1();
                        
                        console.log(number)
          
                    }
                
                  });
                
                 
            }
            if  (с.target.id ==='ancient-card2') {
                number=0;
                green=randomNumber (0, 5, 5 );
                brown=randomNumber (0, 8, 9 );
                blue= randomNumber (0, 3, 2 );
        
                arrNew1.push(cardsBrown3[brown[1]]);
                arrNew1.push(cardsBlue3[blue[0]]);
                arrNew1.push(cardsBrown3[brown[0]]);
                
                arrNew2.push(cardsBrown3[brown[2]]);
                arrNew2.push(cardsGreen3[green[0]]);
                arrNew2.push(cardsBrown3[brown[4]]);
                arrNew2.push(cardsBrown3[brown[3]]);
                arrNew2.push(cardsGreen3[green[1]]);
                arrNew2.push(cardsBlue3[blue[1]]);
         
                arrNew3.push(cardsBrown3[brown[8]]);
                arrNew3.push(cardsBrown3[brown[5]]);
                arrNew3.push(cardsBrown3[brown[6]]);
                arrNew3.push(cardsGreen3[green[2]]);
                arrNew3.push(cardsBrown3[brown[7]]);
                arrNew3.push(cardsGreen3[green[3]]);
                arrNew3.push(cardsGreen3[green[4]]);
        
                Array.prototype.push.apply(arrNew1,arrNew2);
                Array.prototype.push.apply(arrNew1,arrNew3);
               
                document.addEventListener("click", function(m) {
        
                    if  (m.target.id ==='deck' ) {
                        
                        getCard1();
                        
                        console.log(number)
           
                    }
                
                  });
                
                 
            }
            
            if  (с.target.id ==='ancient-card3') {
                number=0;
                green=randomNumber (0, 5, 6 );
                brown=randomNumber (0, 8, 8 );
                blue= randomNumber (0, 3, 2 );
         
                arrNew1.push(cardsBrown3[brown[1]]);
                arrNew1.push(cardsBlue3[blue[0]]);
                arrNew1.push(cardsBrown3[brown[0]]);
                arrNew1.push(cardsGreen3[green[0]]);
        
                arrNew2.push(cardsBrown3[brown[2]]);
                arrNew2.push(cardsBrown3[brown[3]]);
                arrNew2.push(cardsGreen3[green[1]]);
                arrNew2.push(cardsBlue3[blue[1]]);
                arrNew2.push(cardsGreen3[green[2]]);
                arrNew2.push(cardsGreen3[green[3]]);
        
                arrNew3.push(cardsGreen3[green[5]]);
                arrNew3.push(cardsBrown3[brown[7]]);
                arrNew3.push(cardsBrown3[brown[5]]);
                arrNew3.push(cardsBrown3[brown[6]]);
                arrNew3.push(cardsBrown3[brown[4]]);
                arrNew3.push(cardsGreen3[green[4]]);
                
                Array.prototype.push.apply(arrNew1,arrNew2);
                Array.prototype.push.apply(arrNew1,arrNew3);
               
                document.addEventListener("click", function(m) {
        
                    if  (m.target.id ==='deck' ) {
                        
                        getCard1();
                        
                        console.log(number)
           
                    }
                
                  });
                
            }
            if  (с.target.id ==='ancient-card4') {
                number=0;
                green=randomNumber (0, 5, 5 );
                brown=randomNumber (0, 8, 9 );
                blue= randomNumber (0, 3, 2 );
        
                arrNew1.push(cardsBrown3[brown[1]]);
                arrNew1.push(cardsBlue3[blue[0]]);
                arrNew1.push(cardsBrown3[brown[0]]);
                arrNew1.push(cardsGreen3[green[0]]);
        
                arrNew2.push(cardsBrown3[brown[2]]);
                arrNew2.push(cardsBrown3[brown[3]]);
                arrNew2.push(cardsGreen3[green[1]]);
                arrNew2.push(cardsBlue3[blue[1]]);
                arrNew2.push(cardsGreen3[green[2]]);
                arrNew2.push(cardsBrown3[brown[4]]);
                
                arrNew3.push(cardsGreen3[green[3]]);
                arrNew3.push(cardsBrown3[brown[7]]);
                arrNew3.push(cardsBrown3[brown[5]]);
                arrNew3.push(cardsBrown3[brown[6]]);
                arrNew3.push(cardsGreen3[green[4]]);
                arrNew3.push(cardsBrown3[brown[8]]);
                
                Array.prototype.push.apply(arrNew1,arrNew2);
                Array.prototype.push.apply(arrNew1,arrNew3);
               
                document.addEventListener("click", function(m) {
        
                    if  (m.target.id ==='deck' ) {
                       
                        getCard1();
                        
                        console.log(number)
         
                    }
                
                  });
                
            }
        
          });
          
    }
        if  (e.target.id ==='difficulty2') {
            difficulty2.classList.toggle('active'); 
            difficulty1.classList.remove('active'); 
            difficulty3.classList.remove('active');
            difficulty0.classList.remove('active'); 
            difficulty4.classList.remove('active');  

            document.addEventListener("click", function(с) {
    
                // стадии 
            
            // difficulties
                if  (с.target.id ==='ancient-card1') {
                    number=0;
                    let green=randomNumber (0, 17, 4 );
                    let brown=randomNumber (0, 20, 9 );
                    let blue= randomNumber (0, 11, 2 );
            
                    arrNew1.push(cardsBrown[brown[1]]);
                    arrNew1.push(cardsBlue[blue[0]]);
                    arrNew1.push(cardsBrown[brown[0]]);
                    arrNew1.push(cardsBlue[blue[1]]);
            
                    arrNew2.push(cardsBrown[brown[2]]);
                    arrNew2.push(cardsGreen[green[0]]);
                    arrNew2.push(cardsBrown[brown[4]]);
                    arrNew2.push(cardsBrown[brown[3]]);
            
                    arrNew3.push(cardsGreen[green[1]]);
                    arrNew3.push(cardsBrown[brown[8]]);
                    arrNew3.push(cardsBrown[brown[5]]);
                    arrNew3.push(cardsBrown[brown[6]]);
                    arrNew3.push(cardsGreen[green[2]]);
                    arrNew3.push(cardsBrown[brown[7]]);
                    arrNew3.push(cardsGreen[green[3]]);
                    
                    
                    Array.prototype.push.apply(arrNew1,arrNew2);
                    Array.prototype.push.apply(arrNew1,arrNew3);
                   
                    document.addEventListener("click", function(m) {
            
                        if  (m.target.id ==='deck' ) {
                            
                            getCard1();
                            
                            console.log(number)
              
                        }
                    
                      });
                    
                     
                }
                if  (с.target.id ==='ancient-card2') {
                    number=0;
                    green=randomNumber (0, 17, 5 );
                    brown=randomNumber (0, 20, 9 );
                    blue= randomNumber (0, 11, 2 );
            
                    arrNew1.push(cardsBrown[brown[1]]);
                    arrNew1.push(cardsBlue[blue[0]]);
                    arrNew1.push(cardsBrown[brown[0]]);
                    
                    arrNew2.push(cardsBrown[brown[2]]);
                    arrNew2.push(cardsGreen[green[0]]);
                    arrNew2.push(cardsBrown[brown[4]]);
                    arrNew2.push(cardsBrown[brown[3]]);
                    arrNew2.push(cardsGreen[green[1]]);
                    arrNew2.push(cardsBlue[blue[1]]);
             
                    arrNew3.push(cardsBrown[brown[8]]);
                    arrNew3.push(cardsBrown[brown[5]]);
                    arrNew3.push(cardsBrown[brown[6]]);
                    arrNew3.push(cardsGreen[green[2]]);
                    arrNew3.push(cardsBrown[brown[7]]);
                    arrNew3.push(cardsGreen[green[3]]);
                    arrNew3.push(cardsGreen[green[4]]);
            
                    Array.prototype.push.apply(arrNew1,arrNew2);
                    Array.prototype.push.apply(arrNew1,arrNew3);
                   
                    document.addEventListener("click", function(m) {
            
                        if  (m.target.id ==='deck' ) {
                            
                            getCard1();
                            
                            console.log(number)
               
                        }
                    
                      });
                    
                     
                }
                
                if  (с.target.id ==='ancient-card3') {
                    number=0;
                    green=randomNumber (0, 17, 6 );
                    brown=randomNumber (0, 20, 8 );
                    blue= randomNumber (0, 11, 2 );
             
                    arrNew1.push(cardsBrown[brown[1]]);
                    arrNew1.push(cardsBlue[blue[0]]);
                    arrNew1.push(cardsBrown[brown[0]]);
                    arrNew1.push(cardsGreen[green[0]]);
            
                    arrNew2.push(cardsBrown[brown[2]]);
                    arrNew2.push(cardsBrown[brown[3]]);
                    arrNew2.push(cardsGreen[green[1]]);
                    arrNew2.push(cardsBlue[blue[1]]);
                    arrNew2.push(cardsGreen[green[2]]);
                    arrNew2.push(cardsGreen[green[3]]);
            
                    arrNew3.push(cardsGreen[green[5]]);
                    arrNew3.push(cardsBrown[brown[7]]);
                    arrNew3.push(cardsBrown[brown[5]]);
                    arrNew3.push(cardsBrown[brown[6]]);
                    arrNew3.push(cardsBrown[brown[4]]);
                    arrNew3.push(cardsGreen[green[4]]);
                    
                    Array.prototype.push.apply(arrNew1,arrNew2);
                    Array.prototype.push.apply(arrNew1,arrNew3);
                   
                    document.addEventListener("click", function(m) {
            
                        if  (m.target.id ==='deck' ) {
                            
                            getCard1();
                            
                            console.log(number)
               
                        }
                    
                      });
                    
                }
                if  (с.target.id ==='ancient-card4') {
                    number=0;
                    green=randomNumber (0, 17, 5 );
                    brown=randomNumber (0, 20, 9 );
                    blue= randomNumber (0, 11, 2 );
            
                    arrNew1.push(cardsBrown[brown[1]]);
                    arrNew1.push(cardsBlue[blue[0]]);
                    arrNew1.push(cardsBrown[brown[0]]);
                    arrNew1.push(cardsGreen[green[0]]);
            
                    arrNew2.push(cardsBrown[brown[2]]);
                    arrNew2.push(cardsBrown[brown[3]]);
                    arrNew2.push(cardsGreen[green[1]]);
                    arrNew2.push(cardsBlue[blue[1]]);
                    arrNew2.push(cardsGreen[green[2]]);
                    arrNew2.push(cardsBrown[brown[4]]);
                    
                    arrNew3.push(cardsGreen[green[3]]);
                    arrNew3.push(cardsBrown[brown[7]]);
                    arrNew3.push(cardsBrown[brown[5]]);
                    arrNew3.push(cardsBrown[brown[6]]);
                    arrNew3.push(cardsGreen[green[4]]);
                    arrNew3.push(cardsBrown[brown[8]]);
                    
                    Array.prototype.push.apply(arrNew1,arrNew2);
                    Array.prototype.push.apply(arrNew1,arrNew3);
                   
                    document.addEventListener("click", function(m) {
            
                        if  (m.target.id ==='deck' ) {
                            
                            getCard1();
                            
                            console.log(number)
             
                        }
                    
                      });
                    
                }
            
              });
              
        }
        if  (e.target.id ==='difficulty1') {
            difficulty1.classList.toggle('active'); 
            difficulty2.classList.remove('active'); 
            difficulty3.classList.remove('active'); 
            difficulty0.classList.remove('active'); 
            difficulty4.classList.remove('active'); 
        
            document.addEventListener("click", function(с) {
    
                // стадии 
            
            // difficulties
                if  (с.target.id ==='ancient-card1') {
                    number=0;
                    let green=randomNumber (0, 12, 4 );
                    let brown=randomNumber (0, 15, 9 );
                    let blue= randomNumber (0, 7, 2 );
            
                    arrNew1.push(cardsBrown1[brown[1]]);
                    arrNew1.push(cardsBlue1[blue[0]]);
                    arrNew1.push(cardsBrown1[brown[0]]);
                    arrNew1.push(cardsBlue1[blue[1]]);
            
                    arrNew2.push(cardsBrown1[brown[2]]);
                    arrNew2.push(cardsGreen1[green[0]]);
                    arrNew2.push(cardsBrown1[brown[4]]);
                    arrNew2.push(cardsBrown1[brown[3]]);
            
                    arrNew3.push(cardsGreen1[green[1]]);
                    arrNew3.push(cardsBrown1[brown[8]]);
                    arrNew3.push(cardsBrown1[brown[5]]);
                    arrNew3.push(cardsBrown1[brown[6]]);
                    arrNew3.push(cardsGreen1[green[2]]);
                    arrNew3.push(cardsBrown1[brown[7]]);
                    arrNew3.push(cardsGreen1[green[3]]);
                    
                    
                    Array.prototype.push.apply(arrNew1,arrNew2);
                    Array.prototype.push.apply(arrNew1,arrNew3);
                   
                    document.addEventListener("click", function(m) {
            
                        if  (m.target.id ==='deck' ) {
                            
                            getCard1();
                            
                            console.log(number)
              
                        }
                    
                      });
                    
                     
                }
                if  (с.target.id ==='ancient-card2') {
                    number=0;
                    green=randomNumber (0, 12, 5 );
                    brown=randomNumber (0, 15, 9 );
                    blue= randomNumber (0, 7, 2 );
            
                    arrNew1.push(cardsBrown1[brown[1]]);
                    arrNew1.push(cardsBlue1[blue[0]]);
                    arrNew1.push(cardsBrown1[brown[0]]);
                    
                    arrNew2.push(cardsBrown1[brown[2]]);
                    arrNew2.push(cardsGreen1[green[0]]);
                    arrNew2.push(cardsBrown1[brown[4]]);
                    arrNew2.push(cardsBrown1[brown[3]]);
                    arrNew2.push(cardsGreen1[green[1]]);
                    arrNew2.push(cardsBlue1[blue[1]]);
             
                    arrNew3.push(cardsBrown1[brown[8]]);
                    arrNew3.push(cardsBrown1[brown[5]]);
                    arrNew3.push(cardsBrown1[brown[6]]);
                    arrNew3.push(cardsGreen1[green[2]]);
                    arrNew3.push(cardsBrown1[brown[7]]);
                    arrNew3.push(cardsGreen1[green[3]]);
                    arrNew3.push(cardsGreen1[green[4]]);
            
                    Array.prototype.push.apply(arrNew1,arrNew2);
                    Array.prototype.push.apply(arrNew1,arrNew3);
                   
                    document.addEventListener("click", function(m) {
            
                        if  (m.target.id ==='deck' ) {
                            
                            getCard1();
                            
                            console.log(number)
               
                        }
                    
                      });
                    
                     
                }
                
                if  (с.target.id ==='ancient-card3') {
                    number=0;
                    green=randomNumber (0, 12, 6 );
                    brown=randomNumber (0, 15, 8 );
                    blue= randomNumber (0, 7, 2 );
             
                    arrNew1.push(cardsBrown1[brown[1]]);
                    arrNew1.push(cardsBlue1[blue[0]]);
                    arrNew1.push(cardsBrown1[brown[0]]);
                    arrNew1.push(cardsGreen1[green[0]]);
            
                    arrNew2.push(cardsBrown1[brown[2]]);
                    arrNew2.push(cardsBrown1[brown[3]]);
                    arrNew2.push(cardsGreen1[green[1]]);
                    arrNew2.push(cardsBlue1[blue[1]]);
                    arrNew2.push(cardsGreen1[green[2]]);
                    arrNew2.push(cardsGreen1[green[3]]);
            
                    arrNew3.push(cardsGreen1[green[5]]);
                    arrNew3.push(cardsBrown1[brown[7]]);
                    arrNew3.push(cardsBrown1[brown[5]]);
                    arrNew3.push(cardsBrown1[brown[6]]);
                    arrNew3.push(cardsBrown1[brown[4]]);
                    arrNew3.push(cardsGreen1[green[4]]);
                    
                    Array.prototype.push.apply(arrNew1,arrNew2);
                    Array.prototype.push.apply(arrNew1,arrNew3);
                   
                    document.addEventListener("click", function(m) {
            
                        if  (m.target.id ==='deck' ) {
                            
                            getCard1();
                            
                            console.log(number)
               
                        }
                    
                      });
                    
                }
                if  (с.target.id ==='ancient-card4') {
                    number=0;
                    green=randomNumber (0, 12, 5 );
                    brown=randomNumber (0, 15, 9 );
                    blue= randomNumber (0, 7, 2 );
            
                    arrNew1.push(cardsBrown1[brown[1]]);
                    arrNew1.push(cardsBlue1[blue[0]]);
                    arrNew1.push(cardsBrown1[brown[0]]);
                    arrNew1.push(cardsGreen1[green[0]]);
            
                    arrNew2.push(cardsBrown1[brown[2]]);
                    arrNew2.push(cardsBrown1[brown[3]]);
                    arrNew2.push(cardsGreen1[green[1]]);
                    arrNew2.push(cardsBlue1[blue[1]]);
                    arrNew2.push(cardsGreen1[green[2]]);
                    arrNew2.push(cardsBrown1[brown[4]]);
                    
                    arrNew3.push(cardsGreen1[green[3]]);
                    arrNew3.push(cardsBrown1[brown[7]]);
                    arrNew3.push(cardsBrown1[brown[5]]);
                    arrNew3.push(cardsBrown1[brown[6]]);
                    arrNew3.push(cardsGreen1[green[4]]);
                    arrNew3.push(cardsBrown1[brown[8]]);
                    
                    Array.prototype.push.apply(arrNew1,arrNew2);
                    Array.prototype.push.apply(arrNew1,arrNew3);
                   
                    document.addEventListener("click", function(m) {
            
                        if  (m.target.id ==='deck' ) {
                            
                            getCard1();
                            
                            console.log(number)
             
                        }
                    
                      });
                    
                }
            
              });
            
        }
        
        if  (e.target.id ==='difficulty3') {
            difficulty3.classList.toggle('active'); 
            difficulty1.classList.remove('active'); 
            difficulty2.classList.remove('active');
            difficulty0.classList.remove('active'); 
            difficulty4.classList.remove('active'); 
         
            document.addEventListener("click", function(с) {
    
                // стадии 
            
            // difficulties
                if  (с.target.id ==='ancient-card1') {
                    number=0;
                    let green=randomNumber (0, 13, 4 );
                    let brown=randomNumber (0, 15, 9 );
                    let blue= randomNumber (0, 7, 2 );
            
                    arrNew1.push(cardsBrown2[brown[1]]);
                    arrNew1.push(cardsBlue2[blue[0]]);
                    arrNew1.push(cardsBrown2[brown[0]]);
                    arrNew1.push(cardsBlue2[blue[1]]);
            
                    arrNew2.push(cardsBrown2[brown[2]]);
                    arrNew2.push(cardsGreen2[green[0]]);
                    arrNew2.push(cardsBrown2[brown[4]]);
                    arrNew2.push(cardsBrown2[brown[3]]);
            
                    arrNew3.push(cardsGreen2[green[1]]);
                    arrNew3.push(cardsBrown2[brown[8]]);
                    arrNew3.push(cardsBrown2[brown[5]]);
                    arrNew3.push(cardsBrown2[brown[6]]);
                    arrNew3.push(cardsGreen2[green[2]]);
                    arrNew3.push(cardsBrown2[brown[7]]);
                    arrNew3.push(cardsGreen2[green[3]]);
                    
                    
                    Array.prototype.push.apply(arrNew1,arrNew2);
                    Array.prototype.push.apply(arrNew1,arrNew3);
                   
                    document.addEventListener("click", function(m) {
            
                        if  (m.target.id ==='deck' ) {
                            
                            getCard1();
                            
                            console.log(number)
              
                        }
                    
                      });
                    
                     
                }
                if  (с.target.id ==='ancient-card2') {
                    number=0;
                    green=randomNumber (0, 13, 5 );
                    brown=randomNumber (0, 15, 9 );
                    blue= randomNumber (0, 7, 2 );
            
                    arrNew1.push(cardsBrown2[brown[1]]);
                    arrNew1.push(cardsBlue2[blue[0]]);
                    arrNew1.push(cardsBrown2[brown[0]]);
                    
                    arrNew2.push(cardsBrown2[brown[2]]);
                    arrNew2.push(cardsGreen2[green[0]]);
                    arrNew2.push(cardsBrown2[brown[4]]);
                    arrNew2.push(cardsBrown2[brown[3]]);
                    arrNew2.push(cardsGreen2[green[1]]);
                    arrNew2.push(cardsBlue2[blue[1]]);
             
                    arrNew3.push(cardsBrown2[brown[8]]);
                    arrNew3.push(cardsBrown2[brown[5]]);
                    arrNew3.push(cardsBrown2[brown[6]]);
                    arrNew3.push(cardsGreen2[green[2]]);
                    arrNew3.push(cardsBrown2[brown[7]]);
                    arrNew3.push(cardsGreen2[green[3]]);
                    arrNew3.push(cardsGreen2[green[4]]);
            
                    Array.prototype.push.apply(arrNew1,arrNew2);
                    Array.prototype.push.apply(arrNew1,arrNew3);
                   
                    document.addEventListener("click", function(m) {
            
                        if  (m.target.id ==='deck' ) {
                            
                            getCard1();
                            
                            console.log(number)
               
                        }
                    
                      });
                    
                     
                }
                
                if  (с.target.id ==='ancient-card3') {
                    number=0;
                    green=randomNumber (0, 13, 6 );
                    brown=randomNumber (0, 15, 8 );
                    blue= randomNumber (0, 7, 2 );
             
                    arrNew1.push(cardsBrown2[brown[1]]);
                    arrNew1.push(cardsBlue2[blue[0]]);
                    arrNew1.push(cardsBrown2[brown[0]]);
                    arrNew1.push(cardsGreen2[green[0]]);
            
                    arrNew2.push(cardsBrown2[brown[2]]);
                    arrNew2.push(cardsBrown2[brown[3]]);
                    arrNew2.push(cardsGreen2[green[1]]);
                    arrNew2.push(cardsBlue2[blue[1]]);
                    arrNew2.push(cardsGreen2[green[2]]);
                    arrNew2.push(cardsGreen2[green[3]]);
            
                    arrNew3.push(cardsGreen2[green[5]]);
                    arrNew3.push(cardsBrown2[brown[7]]);
                    arrNew3.push(cardsBrown2[brown[5]]);
                    arrNew3.push(cardsBrown2[brown[6]]);
                    arrNew3.push(cardsBrown2[brown[4]]);
                    arrNew3.push(cardsGreen2[green[4]]);
                    
                    Array.prototype.push.apply(arrNew1,arrNew2);
                    Array.prototype.push.apply(arrNew1,arrNew3);
                   
                    document.addEventListener("click", function(m) {
            
                        if  (m.target.id ==='deck' ) {
                            
                            getCard1();
                            
                            console.log(number)
               
                        }
                    
                      });
                    
                }
                if  (с.target.id ==='ancient-card4') {
                    number=0;
                    green=randomNumber (0, 13, 5 );
                    brown=randomNumber (0, 15, 9 );
                    blue= randomNumber (0, 7, 2 );
            
                    arrNew1.push(cardsBrown2[brown[1]]);
                    arrNew1.push(cardsBlue2[blue[0]]);
                    arrNew1.push(cardsBrown2[brown[0]]);
                    arrNew1.push(cardsGreen2[green[0]]);
            
                    arrNew2.push(cardsBrown2[brown[2]]);
                    arrNew2.push(cardsBrown2[brown[3]]);
                    arrNew2.push(cardsGreen2[green[1]]);
                    arrNew2.push(cardsBlue2[blue[1]]);
                    arrNew2.push(cardsGreen2[green[2]]);
                    arrNew2.push(cardsBrown2[brown[4]]);
                    
                    arrNew3.push(cardsGreen2[green[3]]);
                    arrNew3.push(cardsBrown2[brown[7]]);
                    arrNew3.push(cardsBrown2[brown[5]]);
                    arrNew3.push(cardsBrown2[brown[6]]);
                    arrNew3.push(cardsGreen2[green[4]]);
                    arrNew3.push(cardsBrown2[brown[8]]);
                    
                    Array.prototype.push.apply(arrNew1,arrNew2);
                    Array.prototype.push.apply(arrNew1,arrNew3);
                   
                    document.addEventListener("click", function(m) {
            
                        if  (m.target.id ==='deck' ) {
                           
                            getCard1();
                            
                            console.log(number)
             
                        }
                    
                      });
                    
                }
            
              });
        }
        
      });


     
document.addEventListener('click', function(b) {
    //  для древнего 1
    if (b.target.id ==='ancient-card1') {
        card1.classList.toggle('active');
        card4.classList.remove('active'); 
        card3.classList.remove('active');
        card2.classList.remove('active');  
        green1.textContent='0';
        brown1.textContent='2';
        blue1.textContent='2';
        green2.textContent='1';
        brown2.textContent='3';
        blue2.textContent='0';
        green3.textContent='3';
        brown3.textContent='4';
        blue3.textContent='0';
    }
     //  для древнего 2
     if (b.target.id ==='ancient-card2') {
        card2.classList.toggle('active');
        card4.classList.remove('active');
        card3.classList.remove('active');
        card1.classList.remove('active');  
        green1.textContent='0';
        brown1.textContent='2';
        blue1.textContent='1';
        green2.textContent='2';
        brown2.textContent='3';
        blue2.textContent='1';
        green3.textContent='3';
        brown3.textContent='4';
        blue3.textContent='0'; 
    }
    //  для древнего 3
    if (b.target.id ==='ancient-card3') {
        card3.classList.toggle('active');
        card4.classList.remove('active');
        card2.classList.remove('active');  
        card1.classList.remove('active'); 
        green1.textContent='1';
        brown1.textContent='2';
        blue1.textContent='1';
        green2.textContent='3';
        brown2.textContent='2';
        blue2.textContent='1';
        green3.textContent='2';
        brown3.textContent='4';
        blue3.textContent='0';  
    }
    //  для древнего 4
    if (b.target.id ==='ancient-card4') {
        card4.classList.toggle('active');
        card3.classList.remove('active');
        card2.classList.remove('active');  
        card1.classList.remove('active'); 
        green1.textContent='1';
        brown1.textContent='2';
        blue1.textContent='1';
        green2.textContent='2';
        brown2.textContent='3';
        blue2.textContent='1';
        green3.textContent='2';
        brown3.textContent='4';
        blue3.textContent='0';
  
    }
})  ;   


document.addEventListener('click', function(d) {
    //  для древнего 1
    if (d.target.id ==='start') {
        window.location.reload (); 
    }
});    




let j=0;
let i=cardsBlue.length;
deck.addEventListener('click', function() {
  
    if (cardsBrown.includes(arrNew1[j]) && brown1.innerText>0) {        
        brown1.innerText=brown1.innerText-1;   
    }
    else if (cardsBlue.includes(arrNew1[j])  && blue1.innerText>0) {        
        blue1.innerText=blue1.innerText-1;   
    }
    else if (cardsGreen.includes(arrNew1[j])  && green1.innerText>0) {        
        green1.innerText=green1.innerText-1;   
    }
   else if (cardsBrown.includes(arrNew1[j]) && brown2.innerText>0 && brown1.innerText==="0") {        
        brown2.innerText=brown2.innerText-1; 
   }  
   else if (cardsBlue.includes(arrNew1[j])  && blue2.innerText>0 && blue1.innerText==="0") {        
    blue2.innerText=blue2.innerText-1; 
   } 
   else if (cardsGreen.includes(arrNew1[j])  && green2.innerText>0 && green1.innerText==="0") {        
    green2.innerText=green2.innerText-1;   
}
    else if (cardsBrown.includes(arrNew1[j])  && brown3.innerText>0 && brown1.innerText==="0" && brown2.innerText==="0") {        
        brown3.innerText=brown3.innerText-1;   
    }
    
    
        else if (cardsBlue.includes(arrNew1[j]) && blue3.innerText>0 && blue1.innerText==="0" && blue2.innerText==="0") {        
            blue3.innerText=blue3.innerText-1;   
        }
        else if (cardsGreen.includes(arrNew1[j]) && green3.innerText>0 && green1.innerText==="0" && green2.innerText==="0") {        
            green3.innerText=green3.innerText-1;   
        }
        j++;  
});







            
            

  
  
  
