To add a new event:
- Create a new folder in events/ for the respective year and month, if no folder available already
- Copy and rename template.html
- Change title, time, location, description
- Add respective entry in events.json (template below)
- Add event poster & header (if there is one) to the respective folder in images/ and link in events.css/ event website, respectively

JSON TEMPLATE:
[
    "20YY",
    "MM",
    "eventname", // URL
    "Title",
    true, // noImage
    "20YY-MM-DDTHH:MM:SS+01:00" // when should the event be moved to the "past events" tab?
]