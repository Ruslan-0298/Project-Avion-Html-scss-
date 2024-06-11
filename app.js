const mainWrapper=document.querySelector(".Main-Wrapper")

// Wrapper-Info div
const wrapperInfoDiv=document.createElement("div");
wrapperInfoDiv.classList.add("Wrapper-Info");

// Wrapper-Info-About

const wrapperInfoAboutDiv=document.createElement("div")
wrapperInfoAboutDiv.classList.add("Wrapper-Info-About")

// Wrapper-Info-Text

const wrapperInfoTextDiv=document.createElement("div")
wrapperInfoTextDiv.classList.add("Wrapper-Info-Text")
wrapperInfoTextDiv.textContent=" The furniture brand for the future, with timeless designs"

// Wrapper-Info-Button

const wrapperInfoButton=document.createElement("button")
wrapperInfoButton.classList.add("Wrapper-Info-Button")
wrapperInfoButton.textContent="View collection"

// push

wrapperInfoAboutDiv.append(wrapperInfoTextDiv);
wrapperInfoAboutDiv.append(wrapperInfoButton);
wrapperInfoDiv.append(wrapperInfoAboutDiv);

// Wrapper-Info-Down-Text

const wrapperInfoDownText=document.createElement("div")
wrapperInfoDownText.classList.add("Wrapper-Info-Down-Text")
wrapperInfoDownText.textContent= ` A new era in eco friendly furniture with Avelon, the French luxury retail brand 
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.`

// push

wrapperInfoDiv.append(wrapperInfoDownText);
mainWrapper.append(wrapperInfoDiv);

// Wrapper-Img

const wrapperImg=document.createElement("div");
wrapperImg.classList.add("Wrapper-Img");

const img=document.createElement("img")
img.src="img/Images/Main-Wrapper-Img.png"

wrapperImg.append(img);

// push

mainWrapper.append(wrapperImg);


// Ceramics-Collections


const collectionsBlocks=document.querySelector(".Collections-Blocks")


const collectionsBlocksArray=[
    {image:"img/Images/Ceramics-Collections/Chair.png",
     productName:"The Dandy chair",
     productPrice:"£250",
    },

    {image:"img/Images/Ceramics-Collections/Vase.png",
     productName:"Rustic Vase Set",
     productPrice:"£155",
    },

    {image:"img/Images/Photo.png",
     productName:"The Silky Vase",
     productPrice:"£125",
    },

    {image:"img/Images/Ceramics-Collections/Lamp.png",
    productName:"The Lucy Lamp",
    productPrice:"£399",
    },
]


collectionsBlocksArray.forEach((item)=>{

    const productItem=`

<div class="Collections-Block">
    <div class="Block-img">
    <img src=${item.image} alt="">
    </div>
    <div class="Block-descriptions">
        ${item.productName}
    </div>
    <div class="Block-price">
        £${item.productPrice}
    </div>
</div>

    `
    collectionsBlocks.innerHTML +=productItem;
})

// Popular-Product-Blocks

const popularProductBlocks=document.querySelector(".Popular-Product-Blocks")

const popularProductBlocksArray=[
    {image:"img/Images/Sofa.png",
    productName:"The Poplar suede sofa",
    productPrice:"£980",
    },
    {image:"img/Images/Parent.png",
    productName:"The Dandy chair",
    productPrice:"£250",
    },
    {image:"img/Images/1.png",
    productName:"The Dandy chair",
    productPrice:"£250",
    },
]

popularProductBlocksArray.forEach((item)=>{
    const popularItem=`
<div class="Popular-Product-Block">
    <div class="Product-img">
        <img src=${item.image} alt="">
    </div>
    <div class="Product-descriptions">
        ${item.productName}
    </div>
    <div class="Product-price">
        ${item.productPrice}
    </div>
</div>
    `
    popularProductBlocks.innerHTML +=popularItem
})


// события на кнопки

const btn=document.querySelectorAll("button")

btn.forEach((item)=>{
    item.addEventListener("click",()=>{
        console.log(alert("You click the button!"))
    })
})


const li=document.querySelectorAll("li")

li.forEach((item)=>{
    item.addEventListener("click",()=>{
        console.log(alert("You click the link!"))
    })
})

