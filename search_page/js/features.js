
var element = document.querySelectorAll(".image_container");

element.forEach(function(item) {
    item.addEventListener('mouseover', function() {
    
        var allChildren = this["children"];

        let image = allChildren[0];
        let info = allChildren[1];

        // image.style.visibility = "hidden";
        // info.style.visibility = "visible";

        image.style.opacity = 0.5;
        //info.style.opacity = 1;

        // image.style.height = 0;
        // info.style.height = "auto";

        // image.style.display = "none";
        // info.style.display = "block";
        
    });
    item.addEventListener('mouseout', function() {
        
        var allChildren = this["children"];

        let image = allChildren[0];
        let info = allChildren[1];

        // image.style.visibility = "visible";
        // info.style.visibility = "hidden";        

        image.style.opacity = 1;
        //info.style.opacity = 0;

        // image.style.height = "auto";
        // info.style.height = 0;

        // image.style.display = "block";
        // info.style.display = "none";

    });
});