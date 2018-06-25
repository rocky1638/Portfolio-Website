import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sapling extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ paddingBottom: '25px' }}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <div>
              <h1 className="blog-1">Sapling</h1>
              <h3 className="blog-3">For people serious about practicing.</h3>
              <h6 className="blog-6">Published March 10, 2018</h6>
            </div>
            <hr className="blue-hr" style={{border: "4px solid #8BC34A"}}/>
            <div>
              <h2 className="blog-2 bold">Initial Idea & Goals</h2>
              <p className="blog-text">
                Just a couple of days after finishing working on{' '}
                <Link to="/blog/fyg">FindYourGrail</Link>, I was itching to
                start work on another project, so I could cement my newfound
                knowledge and skills, as well as redeem myself, in terms of
                creating a product that felt <i>user-friendly</i> and{' '}
                <i>cohesive</i>.
                <br />
                <br />
                Before I get into the specifics of the app, you might be
                wondering why I decided to build a practice tracking app. In
                fact, I'll preface the explanation by saying that by the time I
                was done with the app, I had one of those{' '}
                <i>"Why didn't I make/find this sooner!"</i> moments.
                <br />
                <br />
                You see, I've been practicing piano through the{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.rcmusic.com/">
                  Royal Conservatory of Music (RCM)
                </a>{' '}
                for over a decade, and in the last couple years, I started to
                lose a little bit of motivation, because as the repertoire got
                harder, the progress came slower. I found myself wanting
                something that could allow me to track my progress, struggles,
                and achievements easily. Of course, there were many apps that
                you <i>could</i> do this on, but nothing (as far as I'm aware)
                that was solely tailored for <b>practice</b>.
                <br />
                <br />
                To add to my motivations, I had just joined{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/waterboysuw/">
                  The Water Boys
                </a>, a capella group where I needed to practice bi-weekly.
                (More on that amazing experience{' '}
                <Link to="/blog/waterboys">here.</Link>) All in all, I felt that
                I could personally benefit from such an app, and had no doubt
                that others could too.
              </p>
              <h2 className="blog-2 bold">An Overview</h2>
              <p className="blog-text">
                In general, the goal of the app was to have pages to allow users
                to create new categories of practice, and then to log practices,
                based on category. Simple enough.
                <br />
                <br />
                First time users would be met by a landing page that featured
                some brief value statements, as well as clear buttons that
                allowed the user to log in with either Google or Facebook.
                <div className="blog-image-div center">
                  <img
                    className="blog-image"
                    src="/assets/sapling/sapling_landingpage.png"
                    alt="Sapling's Landing Page"
                  />
                  <h6 className="blog-6">Sapling's Landing Page</h6>
                </div>
                After logging in, users are met with some stats{' '}
                <i>(which I haven't quite finished...)</i>, as well as a button
                prompting them to begin practicing their most recently practiced
                category, as a way to encourage continued and consistent
                practice.
                <div className="blog-image-div center">
                  <img
                    className="blog-image"
                    src="/assets/sapling/sapling_dashboard.png"
                    alt="Sapling Dashboard"
                  />
                  <h6 className="blog-6">The Dashboard</h6>
                </div>
                Here's the form for adding a new practice category:
                <div className="blog-image-div center">
                  <img
                    className="blog-image"
                    src="/assets/sapling/sapling_newpractice.png"
                    alt="Sapling New Practice"
                  />
                  <h6 className="blog-6">Adding a new practice category</h6>
                </div>
                And a list of categories currently being practiced:
                <div className="blog-image-div center">
                  <img
                    className="blog-image"
                    src="/assets/sapling/sapling_logs.png"
                    alt="Sapling Log Categories"
                  />
                  <h6 className="blog-6">
                    A list of categories being practiced
                  </h6>
                  And of course, after starting a new practice, a timer is
                  started. After the user finished practicing, they are taken to
                  a form to document what they practiced, as well as what they
                  hope to practice next time. (mobile screenshots this time!)
                  <div className="blog-image-div center">
                    <div className="col-xs-12 col-sm-6">
                      <img
                        className="blog-image"
                        src="/assets/sapling/sapling_timer_mobile.png"
                        alt="Sapling Timer Page"
                      />
                      <h6 className="blog-6">The Timer</h6>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <img
                        className="blog-image"
                        src="/assets/sapling/sapling_addlogform_mobile.png"
                        alt="The Add Log Form"
                      />
                    </div>
                    <h6 className="blog-6">The Add Log Form</h6>
                  </div>
                </div>
              </p>
              <h2 className="blog-2 bold">What's Next?</h2>
              <p className="blog-text">
                Overall, I'm quite happy with how this application turned out.
                Although it was quite simple, I was able to cement my knowledge
                of various technologies such as MongoDB, Node/Express, and
                React/Redux.
                <br />
                <br />
                As far as for what I plan on doing next, I've recently started
                diving into mobile app development, and once I get comfortable
                with that, I might consider porting Sapling to mobile. This
                would probably be a better platform for the app, as the timer
                could run in the background, without the need for the user to
                keep their laptops open while practicing.
                <br />
                <br />
                In terms of web development, I would still like to learn some
                more complicated concepts such as sockets for live chats.
                Finally, I want to get to the point where I can make a CSS file
                for a large app clean and efficient, without being overwhelmed
                by redundant or conflicting classes.
                <br />
                <br />
                I'm definitely looking forward to learning more about all
                aspects of web development at my first co-op job at{' '}
                <a href="https://new.consensys.net/" rel="noopener noreferrer" target="_blank">
                  Consensys
                </a>! Read all about that <Link to="/blog/consensys">here</Link>.
                <br />
                <br />
                Anyways, that's all I have to say for now. If you'd like to get
                in contact, just email me at{' '}
                <a href="mailto:rockzhou15@gmail.com">rockzhou15@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sapling;
