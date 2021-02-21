const base = document.querySelector('.sol');
const myButton = document.getElementById('myBtn');
const sound = document.getElementById("myAudio");
const myText = document.querySelector('.text');
const butonImage = document.querySelector('.btn-img');
let cNodes = 0;
let div = 0;
let img = 0;
let mySecondArr = [];
let myThirdArr = [];
let myFourthArr = [];
let index = 0;
let indexTwo = 0;
let cardName = 0;


const myFirstArr = [
    '10C.png', '10D.png', '10H.png', '10S.png',
    '2C.png',  '2D.png',  '2H.png',  '2S.png',
    '3C.png',  '3D.png',  '3H.png',  '3S.png',
    '4C.png',  '4D.png',  '4H.png',  '4S.png',
    '5C.png',  '5D.png',  '5H.png',  '5S.png',
    '6C.png',  '6D.png',  '6H.png',  '6S.png',
    '7C.png',  '7D.png',  '7H.png',  '7S.png',
    '8C.png',  '8D.png',  '8H.png',  '8S.png',
    '9C.png',  '9D.png',  '9H.png',  '9S.png',
    'AC.png',  'AD.png',  'AH.png',  'JC.png',
    'JD.png',  'JH.png',  'JS.png',  'KC.png',
    'KD.png',  'KH.png',  'KS.png',  'QC.png',
    'QD.png',  'QH.png',  'QS.png'
  ];



function myFunc()
{
    
      for(let i = 0; i < 15; i++)
      {
          mySecondArr[i] = myFirstArr[Math.floor(Math.random() * 50)];
      } 
    
    
    
    
    for(let i = 0; i < 15; i++)
    {
        div = document.createElement('div');
        img = document.createElement('img');

        div.classList.add('card');
        img.classList.add('image');
        img.src = `assets/photos/${mySecondArr[i]}`;

        base.appendChild(div);
        div.appendChild(img);
    }


}

function myfuncc()
{
    while(true)
    {
        cardName = myFirstArr[Math.floor(Math.random() * 50)]
        if(! (mySecondArr.includes(cardName)))
        {
            myThirdArr[index] = cardName;
            index++;
            if(index == 14)
            {
                break;
            }
        }
        
    }

    myButton.setAttribute('onclick','location.reload();');

    cNodes = document.getElementById('sol').childNodes;

    cNodes.forEach(element => {
        myFourthArr[indexTwo] = element.childNodes;
        indexTwo++;
    });
    

    for(let x = 1; x <= 15;x++)
    {
        myFourthArr[x][0].setAttribute('src',`assets/photos/${myThirdArr[x-1]}`);
        myFourthArr[x][0].setAttribute('alt',``);
    }

    myText.innerText = "Seçtiğin kart uçtu...";
    butonImage.setAttribute('src','https://fontmeme.com/permalink/210212/5ed63a14345f3c742b0f3fc326ee8843.png');
    playAudio();
    
}

function playAudio() { 
    sound.play(); 
} 