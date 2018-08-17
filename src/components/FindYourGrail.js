import React, { Component } from 'react';

class FindYourGrail extends Component {
  componentDidMount() {
    document.body.className = 'white';
  }

  render() {
    return (
      <div className="container-fluid slide-in-from-bottom" style={{ paddingBottom: '25px' }}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <div>
              <h1 className="blog-1">
                <b>Find Your Grail</b>
              </h1>
              <h3 className="blog-3">My first full-stack web application.</h3>
              <h6 className="blog-6">Published January 15, 2018</h6>
            </div>
            <hr className="blue-hr" style={{border: "4px solid #ffd014"}}/>
            <div>
              <h2 className="blog-2">
                <b>First, some background...</b>
              </h2>
              <p className="blog-text">
                In the years leading up to university, I had always been
                interested in coding and design. Despite this, I never really
                found the commitment to sit down and dive deep into one specific
                language or tech stack{' '}
                <i>
                  (I know what you're thinking, must've been <b>some</b>{' '}
                  interest huh... But hear me out)
                </i>.
                <br />
                <br />
                One day, after hearing about a huge sale at Udemy, I decided to
                commit once and for all, and picked up five courses, all focused
                on modern web and mobile development, with emphasis on React,
                Redux, and Node.
                <br />
                <br />
                After several weeks of working my way through explanations,
                examples, and revelations, I decided that I was ready to design
                my first real full-stack web app.
              </p>
              <h2 className="blog-2">
                <b>The Idea</b>
              </h2>
              <p className="blog-text">
                As high school rolled around, I started getting more and more
                interested in the world of fashion, and more specifically, the
                subculture known as{' '}
                <a target="_blank" rel="noopener noreferrer" href="http://reddit.com/r/streetwear">
                  streetwear
                </a>. Realizing that I finally had the core skills I needed to
                design an app that <i>actually had users</i>, I set out to make
                a website in which users could buy and sell their new or
                second-hand clothing.
                <br />
                <br />
                Of course, being as interested as I was in streetwear, I knew
                that there were already many sites in which people could buy and
                sell clothes, including, prominently,{' '}
                <a target="_blank" rel="noopener noreferrer" href="http://grailed.com">
                  Grailed
                </a>.
                <div className="blog-image-div center">
                  <img
                    className="blog-image"
                    src="/assets/fyg/grailed_homepage.png"
                    alt="Grailed's Homepage"
                  />
                  <h6 className="blog-6">Grailed's Homepage</h6>
                </div>
                <br />
                Although Grailed boasts a huge community, and in turn, an
                enormous collection of clothing and shoes, their system is
                fairly complicated. It features a asking price/offer system, as
                well as integrated payment through credit cards and PayPal.
                <br />
                <br />
                Of course, there's nothing wrong with this, but I just wanted
                something that was both more <i>local</i> and <i>simple</i>.
              </p>
              <h2 className="blog-2">
                <b>The Landing Page</b>
              </h2>
              <p className="blog-text">
                Although this project at it's heart was supposed to be a
                learning experience, I still wanted the app to be something that
                I would use.
                <br />
                <br />
                One aspect that I really wanted to emphasize was the idea of the
                ease with which someone could go from wanting an item of
                clothing, to contacting the seller and ultimately purchasing the
                item. Therefore, the landing page had to be both minimalist, and
                fit within the aesthetic of the streetwear scene.
              </p>
              <div className="blog-image-div center">
                <img
                  className="blog-image"
                  src="/assets/fyg/fyg_homepage.png"
                  alt="FindYourGrail's Homepage"
                />
                <h6 className="blog-6">The Landing Page</h6>
              </div>
              <p className="blog-text">
                In general, I feel that the use of the background image along
                with a starkly contrasting, transparent, wireframe style search
                box did enough both aesthetically, as well as functionally,
                drawing the users eyes onto the search bar.
              </p>
              <h2 className="blog-2">
                <b>Listings</b>
              </h2>
              <p className="blog-text">
                Here are some example screens for the listing upload form and a
                listing details screen:
              </p>
              <div className="blog-image-div center">
                <div className="col-xs-12 col-sm-6">
                  <img
                    className="blog-image"
                    src="/assets/fyg/fyg_listing_mobile.png"
                    alt="An example listing"
                  />
                  <h6 className="blog-6">A Listing</h6>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <img
                    className="blog-image"
                    src="/assets/fyg/fyg_addlisting_mobile.png"
                    alt="The add listing form"
                  />
                </div>
                <h6 className="blog-6">The Add Listing Form</h6>
              </div>
              <p className="blog-text">
                <b>Note:</b> The delete listing button is shown because the
                listing was posted by the current logged in user. It would
                display "Contact Seller", with a link to email the seller if the
                user was viewing a listing that wasn't posted by them.
              </p>
              <h2 className="blog-2">
                <b>Profile</b>
              </h2>
              <p className="blog-text">
                Here's an example of the profile screen:
              </p>
              <div className="blog-image-div center">
                <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                  <img
                    className="blog-image"
                    src="/assets/fyg/fyg_profile_mobile.png"
                    alt="The profile page"
                  />
                  <h6 className="blog-6">The Profile Page</h6>
                </div>
              </div>
              <h2 className="blog-2">
                <b>But what about the backend??</b>
              </h2>
              <p className="blog-text">
                I have to admit, before taking any courses on backend server
                technologies, my understanding of backend servers was limited to
                publically accessible APIs, and the rest was left to wild
                speculation, which often consisted of mental images of magical
                code sorcerors.
                <br />
                <br />
                After stumbling through the backend creation of this project,
                although I have learned <i>a ton</i>, including:
                <br />
                <br />
                <ul>
                  <li>MongoDB Database Queries</li>
                  <li>Mongoose Schema</li>
                  <li>Routes and Middleware in Express</li>
                  <li>
                    Integrating a React/Redux front-end with a Node/Express
                    back-end
                  </li>
                  <li>Google OAuth and session management with cookies</li>
                </ul>
                I still have so much to learn and familiarize myself with. Most
                importantly, I want to have the skills and knowledge to be able
                to design a more complicated and scaleable database. On top of
                that, I would be interested in learning some of the more popular
                database technologies in the field, such as SQL.
              </p>
              <h2 className="blog-2">
                <b>Conclusion / Future considerations</b>
              </h2>
              <p className="blog-text">
                All in all, this project is far from being completely done, and
                could still be fleshed out. Some things that could be added
                include:
                <br />
                <br />
                <ul>
                  <li>More complicated search filters/criteria</li>
                  <li>
                    Showing results based on proximity using GeoJSON objects
                  </li>
                  <li>
                    Implementing an integrated payment system{' '}
                    <i>
                      (although this would deviate from the initial design
                      philosophy)
                    </i>
                  </li>
                </ul>
                Also... about deployment. I'm hesitant because, being my first
                full-stack app, I'm not sure if I would be ready to fix bugs and
                deal with user complaints while also trying to balance school
                work and sleep.
                <br />
                <br />
                On top of that, I also have some issues with the overall
                design...
              </p>
              <h2 className="blog-2">
                <b>Addendum: Concerning design</b>
              </h2>
              <p className="blog-text">
                <b>Disclaimer:</b> Just because I'm including my thoughts on the
                design of this app in the addendum doesn't mean I think it's any
                less important. I just thought it'd fit better here.
                <br />
                <br />
                I want to first start off by saying that I'm quite satisfied
                with the design of the landing page. I feel that the aesthetic
                would appeal to the kinds of users that would use this app, and
                also feel that the contrasting search bar and buttons allow the
                user to easily understand the flow of the app.
                <br />
                <br />
                However, I feel that the biggest challenge I faced was trying to
                maintain unity throughout all the pages, while also ensuring
                that the app was easy to use. Initially, I tried to keep the
                background picture from the landing page as the background for{' '}
                <i>every</i> page, but in the end, the background was too
                distracting when a user was trying to focus on actual listings.
                <br />
                <br />
                I then decided to switch to a plain off-white background, and
                use box-shadows and some basic material design concepts to make
                my app look sleek and user-friendly. However, the result was a
                landing page that felt disconnected from the rest of the app.
                <br />
                <br />
                In the future, I really should decide on a colour scheme and a
                design philosophy in advance of creating anything, so that my
                app as a whole can feel both <i>cohesive</i> and{' '}
                <i>immersive</i>.
                <br />
                <br />
                Welp. That's about it.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindYourGrail;
