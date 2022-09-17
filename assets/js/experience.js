AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [{
    title: "Web Development Intern",
    cardImage: "assets/images/experience-page/flipkart.png",
    place: "SoLEco Consortium",
    time: "(Jul, 2021 - Dec, 2021)",
    desp: "<li>Worked on Developing Website in Wordpress and Code.</li> <li>Made changes in the current progressive web app of Soleco to react to different actions performed on Web page.</li> <li>Impliemented a Blog Post Section in website about Client's Work.</li>",
}, ];

const showCards2 = () => {
    let output = "";
    exp.forEach(
        ({ title, cardImage, place, time, desp }) =>
        (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
    );
    experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
