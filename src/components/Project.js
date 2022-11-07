import React from 'react'

function Project() {
  return (
    <div id="projects" className="background-alt">
      <h2 className="heading">Projects</h2>
      <div className="container">
        <div className="row">
          <div className="project shadow-large">
            <a href="https://bodhiandride.com.au/" className="project-image">
              <img src="images/bodybuilding.png" alt="bodybuilding" />
            </a>
            <div className="project-info">
              <h3>BODHI & RIDE</h3>
              <p>
                <strong>WE RIDE TOGETHER, </strong>
                <strong> WE THRIVE TOGETHER, </strong>
                <strong> THIS IS OUR TRIBE</strong><br />
                And we definitely don’t do mundane. We’ve revolutionised
                traditional spin and created a world first! Welcome to the Ride
                Chamber. A dark, hot and steamy studio fitted with high tech
                bikes and production quality light and sound systems.<br />
                <span
                  >Skills: React, Node, TailwindCSS, Stripe API, Google Ads, AWS
                  S3</span>
              </p>
              <a href="https://bodhiandride.com.au/">View Project</a>
            </div>
          </div>

          <div className="project shadow-large">
            <a href="https://www.formanandfield.com" className="project-image">
              <img src="images/foodDelivery.jpg" alt="foodDelivery" />
            </a>
            <div className="project-info">
              <h3>ARTISAN BRITISH FOOD DELIVERY</h3>
              <p>
                Forman & Field is our gourmet food home delivery service. It's
                very simple. We source the finest foods from across the British
                Isles and whisk them, fresh as can be, to your doorstep. Fish,
                meat, cheese, charcuterie – the very best we can find. We also
                make gourmet dishes for top restaurants and hotels so you get to
                try those, too, in the comfort of your home.<br />
                <span
                  >Skills: NextJS, Laravel, MUI, ElasticSearch, GeoAPI, Google
                  Maps, TwilioAPI, SQL</span>
              </p>
              <a href="https://www.formanandfield.com">View Project</a>
            </div>
          </div>

          <div className="project shadow-large">
            <a href="https://www.spacenk.com/uk/home" className="project-image">
              <img src="images/spaceNK.png" alt="SpaceNK" />
            </a>
            <div className="project-info">
              <h3>"Space NK"</h3>
              <p>
                One of large Ecommerce websites of personal care and beauty
                products based on UK. Shop Space NK's edit of luxury makeup,
                haircare, skincare and fragrance from bestselling brands
                including Charlotte Tilbury, Drunk Elephant, Diptyque and
                Diptyque as well as a host of exclusive brands such as Boy
                Smells and Rose Inc.<br />
                <span
                  >Skills: Salesforce, React/Redux, Strapi, MongoDB,
                  Paypal</span>
              </p>
              <a href="https://www.spacenk.com/uk/home">View Project</a>
            </div>
          </div>

          <div className="project shadow-large">
            <a href=" https://www.afristay.com/" className="project-image">
              <img src="images/realEstate.png" alt="realEstate" />
            </a>
            <div className="project-info">
              <h3>"Find your Dream Getaway"</h3>
              <p>
                South Africa accommodation booking. Find a place to stay, over
                20000 listings, holiday homes, guest houses, BnBs, villas and
                more. <br />The best and easiest way to book your perfect
                getaway! Best deals. Instant confirmations. Secure bookings.
                Best price guaranteed!<br />
                <span>Skills: Python, Django, VueJS, Bootstrap, NGINIX,
                  PostgreSQL</span>
              </p>
              <a href=" https://www.afristay.com/">View Project</a>
            </div>
          </div>

          <div class="project shadow-large">
            <a href="https://www.callcarpenter.com/" class="project-image">
              <img src="images/ruby.png" />
            </a>
            <div class="project-info">
              <h3>"Carpenter Realtors"</h3>
              <p>
                Selling your home? Carpenter Realtors is focused not only on
                finding a buyer for your home, but finding the right buyer!<br />
                Carpenter Realtors has Indiana's best local real estate mobile
                apps. We've seen how you search for homes for sale in your car,
                in the neighborhoods you like. Our apps are device-specific and
                it fits perfectly with Carpenter's Mobile Mission.<br />
                <span>Skills: Ruby on Rails, React, MongoDB, AWS</span>
              </p>
              <a href="https://www.callcarpenter.com/">View Project</a>
            </div>
          </div>

          <div className="project shadow-large">
            <a
              href="https://aspirity.com/portfolio/ebook"
              className="project-image"
            >
              <img src="images/ebook.PNG" alt="ebook" />
            </a>
            <div className="project-info">
              <h3>«E-workbook» pilot application</h3>
              <p>
                E-learning - a learning system based on formalised teaching but
                with the help of electronic resources. We developed the
                prototype of desktop offline application with education courses
                incorporating all appropriate features: text materials, videos,
                tasks, etc.<br />
                <span>Skills: Angular, Node, Electron, Javascript, JSON</span>
              </p>
              <a href="https://aspirity.com/portfolio/ebook">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
