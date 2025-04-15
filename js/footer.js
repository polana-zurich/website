let footer = document.createElement("footer");

let footerText = document.createElement("div");
footerText.setAttribute("class", 'footer-text');
footerText.innerHTML = '© 2025 POLANA Zürich';
footer.appendChild(footerText);

let organisationLogos = document.createElement("div");
organisationLogos.setAttribute("class", "organisation-logos");
footer.appendChild(organisationLogos);

let impulsfabrik = document.createElement("img");
let vseth = document.createElement("img");

impulsfabrik.setAttribute("class", "impulsfabriklogo");
impulsfabrik.setAttribute("src", "/images/Impulsfabrik_Logo_RGB_1.1.webp");
vseth.setAttribute("src", "/images/vseth_Logo_bunt.webp");

organisationLogos.appendChild(impulsfabrik);
organisationLogos.appendChild(vseth);

document.body.appendChild(footer);