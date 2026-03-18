(async () => {
    let response = await fetch("/events/events.json");
    let events = await response.json()

    console.log(events);

    let upcomingEvents = document.getElementsByClassName("upcoming-events")[0];
    let pastEvents = document.getElementsByClassName("past-events")[0];

    for(var i = 0; i < events.length; i++) {
        let curr = events[i];
        // create event box
        // TEMPLATE:
            // <a href="events/yyyy/mm/eventname.html">
            // 	<li class="content-box hidden no-image" id="eventyyyymmeventurl">
            // 		<p class="content-box-info hidden" additional="Read more >>">
            // 			Event Name
            // 		</p>
            // 	</li>
            // </a>

            // [0]: year
            // [1]: month
            // [2]: url
            // [3]: title
            // [4]: noImage
            // [5]: expiresOn
            
        let a = document.createElement("a");
        a.setAttribute("href", "events/" + curr[0] + "/" + curr[1] + "/" + curr[2] + ".html");

        let li = document.createElement("li");
        if (curr[4]) {
            li.setAttribute("class", "content-box hidden no-image");
        } else {
            li.setAttribute("class", "content-box hidden");
        }
        li.setAttribute("id", "event" + curr[0] + curr[1] + curr[2]);
        a.appendChild(li);

        let p = document.createElement("p");
        p.setAttribute("class", "content-box-info");
        p.setAttribute("additional", "Read more >>");
        p.innerHTML = curr[3];
        li.appendChild(p);
        
        let currentTime = new Date();
        let expiresTime = new Date(curr[5]);

        if (currentTime > expiresTime) {
            pastEvents.appendChild(a);
        } else {
            document.getElementsByClassName("no-upcoming-events")[0].style.display = "none";
            upcomingEvents.appendChild(a);
        }
    }

    // animation on scroll

    const iobs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
        
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => iobs.observe(element));
})();