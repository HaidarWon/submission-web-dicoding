let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "vansimpson") {
            event.target.setAttribute("src", "assets/image/vansimpson4.png");
            return;
        } else if (event.target.id === "compassretrograde") {
            event.target.setAttribute("src", "assets/image/compassretrograde1.png");
            return;
        }else if (event.target.id === "championtees") {
            event.target.setAttribute("src", "assets/image/championtees1.png");
            return;
        }else if (event.target.id === "nasihablouse") {
            event.target.setAttribute("src", "assets/image/nasihablouse3.png");
            return;
        }else if(event.target.id === "ripndip") {
            event.target.setAttribute("src", "assets/image/ripndipsweaterzip2.png");
            return;
        }
        
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "vansimpson") {
            event.target.setAttribute("src", "assets/image/vansimpson2.png");
            return;
        }else if (event.target.id === "compassretrograde") {
            event.target.setAttribute("src", "assets/image/compassretrograde.png");
            return;
        }else if (event.target.id === "championtees") {
            event.target.setAttribute("src", "assets/image/championtees.png");
            return;
        }else if (event.target.id === "nasihablouse") {
            event.target.setAttribute("src", "assets/image/nasihablouse2.png");
            return;
        }else if(event.target.id === "ripndip") {
            event.target.setAttribute("src", "assets/image/ripndipsweaterzip1.png");
            return;
        }
    });
}