
var element = document.querySelectorAll(".card");

element.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        console.log("hover");
        var allChildren = this["children"];

        let image = allChildren[0];
        let info = allChildren[1];

        // image.style.visibility = "hidden";
        // info.style.visibility = "visible";

        // image.style.opacity = 0;
        // info.style.opacity = 1;

        // image.style.height = 0;
        // info.style.height = "auto";

        image.style.display = "none";
        info.style.display = "block";
        
    });
    item.addEventListener('mouseout', function() {
        console.log("mouseOut");
        var allChildren = this["children"];

        let image = allChildren[0];
        let info = allChildren[1];

        // image.style.visibility = "visible";
        // info.style.visibility = "hidden";        

        // image.style.opacity = 1;
        // info.style.opacity = 0;

        // image.style.height = "auto";
        // info.style.height = 0;

        image.style.display = "block";
        info.style.display = "none";

    });
});