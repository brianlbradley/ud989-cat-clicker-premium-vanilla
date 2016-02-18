
 var model = {
    currentCat: null,
      cats:[
        {
          clickCount: 0,
          name: "Fluffy",
          imgSrc: "images/Fluffy.jpeg"
        },
        {
          clickCount: 0,
          name: "The Praying Kitty",
          imgSrc: "images/begging.jpeg"
        },
         {
          clickCount: 0,
          name: "Fluffy",
          imgSrc: "images/blacky.jpeg"
        },
         {
          clickCount: 0,
          name: "Cleo",
          imgSrc: "images/Cleo.jpeg"
        },
         {
          clickCount: 0,
          name: "Tabby",
          imgSrc: "images/tabby.jpeg"
        }

      ]
 };

var octopus = {

    initialize: function() {
        model.currentCat = model.cats[0];
        //tells our views to initialize
        catView.initialize();
        catList.initialize();
    },
    getCurrentCat: function() {
        return model.CurrentCat;
    },

    setCurrentCat:function(cat){
        model.currentCat=cat;

    },
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }
};


var catView = {

    initialize: function() {
        //store pointers to our DOM elements for easy accessibility later
        this.catElem= document.getElementById("cat");
        this.catName =document.getElementById("nameofCat");
        this.catCount = document.getElementById("catCount");
        this.catPic = document.getElementById("catPicture");


    //On Click increment the current cat picture
    this.catPic.addEventListener('click', function() {
        octopus.incrementCounter();
    });
    this.render();
},

render: function() {
    //update the DOM elements with values from the current cat
    var currentCat = octopus.getCurrentCat();
    this.catCount.textContent= currentCat.clickCount;
    this.catName.textContent = currentCat.name;
    this.catPic.src = currentCat.imgSrc;
}
};

var catList = {
    initialize:function() {
        this.catListElem = document.getElementById("listOfCats");

    this.render();
},

render: function(){
    var cat, elem, i;
      var cats = octopus.getCats();

      //loop over the cats

      for (i=0; i<cats.length; i++) {
        cat = cats[i];

        elem=document.createElement('li');
        elem.textContent = cat.name;

        elem.addEventListener('click', (function(catCopy) {
            return function(){
                octopus.setCurrentCat(catCopy);
                catView.render();

            };

        })(cat));
        this.catListElem.appendChild(elem);

      }
   }

};

octopus.initialize();



































//var elem = document.getElementById('img'); //ThePicture
//elem.addEventListener('click', function(){
//var element = event.currentTarget;
  //     element.clk =(element.clk || 0) +1; //clk is made up doesn't have to be defined
    //   document.getElementById("counted").innerHTML ="This Kitty has been clicked " + element.clk + " times.";

  //the element has been clicked... do stuff here
//}, false);





//If you're using jQuery, you'll be adding the "click" event listener with jQuery.click().

//$('#my-elem').click(function(e) {
  //the element has been clicked... do stuff here
//});