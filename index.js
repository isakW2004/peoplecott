var brands;
var search = document.getElementById('input');
function updateResults(){
    var results=[];
    document.querySelector('.no-results').hidden= true
    for(var i=0;i<brands.length;i++){
        searchBrand(input.value, brands[i], function(brandObject){
            brandObject.parentIndex= i
            results.push(brandObject)
        })
    }
    results = sortResults(results)
    for(var i=0;i<results.length;i++){
        var node = document.createElement("div");
        node.classList.add('card')
        node.dataset.parentIndex = results[i].parentIndex
        node.onclick = cardOnClick
        node.innerHTML = '<div class="text"><h4>'+results[i].name+'</h4><small class="text-muted">'+results[i].desc+'</small></div><img src="'+brands[results[i].parentIndex].logo+'">'
        document.getElementById("results").appendChild(node);
    }
    if(results.length === 0){
        document.querySelector('.no-results').hidden= false
    }
}
function searchBrand(string, brandObject, callback){
    for(var i=0;i<brandObject.brands.length; i++){
        var currentBrand = brandObject.brands[i];
        if(simplify(brandObject.brands[i].name).search(simplify(string)) != -1){
            callback(currentBrand, brandObject)
        }
    }
}
function simplify(st){
    return st.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

function sortResults(input){
    return input.sort(function(a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1; 
        }
        if (nameA > nameB) {
          return 1; 
        }
        return 0; 
      });
}

function cardOnClick(){
    var brand = brands[this.dataset.parentIndex]
    document.getElementById("infoContainer").innerHTML = '<h1>'+brand.name+'</h1><p>'+brand.desc+'</p><p>When you buy products from this brand, you support their practices. Here are some of their more controversial practices:</p><div class="symbols"></div><div class="text-center"><u onclick="info.close()">Close</u></div>'
    for(var i=0;i< brand.categories.length;i++){
        document.getElementById("infoContainer").querySelector(".symbols").innerHTML += '<div><img src="'+categories[brand.categories[i]].symbol+'"><h2>'+categories[brand.categories[i]].name+'</h2><p>'+brand.info[i]+'</p></div>'
    }
    info.open()
}

const info={
    open: function(){
        if(document.getElementById("info").style.display = "none"){
            $( "#info" ).slideToggle(200);
        }
        document.getElementById("info-scrim").hidden = false;
    },
    close: function(){
        if(document.getElementById("info").style.display != "none"){
            $( "#info" ).slideToggle(200,"swing", function(){
                document.getElementById("info-scrim").hidden = true;
            });
        }
    },
    logoPress: function(){
        document.getElementById("infoContainer").innerHTML = '<h1>Peoplecott</h1><p>Peoplecott lets you search for a brand name, see their parent company, and lets you easily see and understand controversial practices that the company does.</p><p>When you search for brands on Peoplecott, you\'ll see their parent company and what the brand sells. Click on a brand to see more about it\'s parent company.</p><p>Here is why you should use Peoplecott:</p><div class="symbols"><div><img src="symbols/labor.svg"><h2>Accessible</h2><p>Peoplecott has an easy to use interface</p></div><div><img src="symbols/shield.svg"><h2>Private</h2><p>Peoplecott doesn\'t set cookies or collect your data. The code is also <a href="github.com">open source</a>, so anyone can make changes.</p></div><div><img src="symbols/install.svg"><h2>Installable</h2><p>Add it to your home screen to easily use the app on the go. </p></div></div><div class="text-center"><u onclick="info.close()">Close</u></div>'
        info.open()
    }
}

const categories = {
    resources:{name:"Resources", symbol:"symbols/resources.svg"},
    labor:{name:"Labor", symbol:"symbols/labor.svg"},
    politics:{name:"Politics", symbol:"symbols/politics.svg"},
    marketing:{name:"Marketing", symbol:"symbols/marketing.svg"},
    other:{name:"Other", symbol:"symbols/other.svg"}
}

$(document).keyup(function(e) {
    if (e.key === "Escape") {
      info.close()
   }
});
