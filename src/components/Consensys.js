import React, { Component } from 'react';

class ConsenSys extends Component {
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
                <b>Consensys</b>
              </h1>
              <h3 className="blog-3">My first co-op.</h3>
              <h6 className="blog-6">May 2018 - August 2018</h6>
            </div>
            <hr className="blue-hr" style={{border: "4px solid #081B40"}}/>
            <div>
              <h2 className="blog-2">
                <b>A Short Intro</b>
              </h2>
              <p className="blog-text">
                Although I originally thought that I would be working for ConsenSys as a whole, I actually ended up being a part of a <i>spoke</i> called <a href="https://meridio.co" target="_blank" rel="noopener noreferrer"><b>Meridio.</b></a> Essentially, <a href="https://new.consensys.net/" target="_blank" rel="noopener noreferrer">ConsenSys</a> is set up as a sort of incubator for blockchain, and more specifically, <a href="https://ethereum.org/" target="_blank" rel="noopener noreferrer">Ethereum</a> based ideas and companies. The company and the CEO, <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Joseph_Lubin_(entrepreneur)">Joe Lubin</a>, offer funding and talent for these startups <i>(also known as "spokes")</i>, and in return, ConsenSys will own a percentage of any startups that come from it.
                <br/>
                <br/>
                Anyways, the spoke that I worked for essentially wanted to <b>tokenize real estate.</b> Traditionally, for an individual to invest in real estate, they either have to have enough initial funds to straight-up buy a property, or invest in diversified real estate funds such as REITs. However, this means that the barrier of entry for most real estate investment is quite high, and the liquidity of these investments are low due to the friction caused by contracts and the need for lawyers/agents.
                <br/>
                <br/>
                At Meridio however, the idea was to allow investors and holding agencies to list their properties on the web platform, and also to <i>create tokens</i> from the properties. These tokens would be traded on the Ethereum blockchain by any investor who signs up for the platform, allowing for more flexibility and liquidity in the investor's investments. Furthermore, this would also lower the barrier of entry, as investors could easily only buy into <i>part of a property</i>. They would in turn then earn rent and appreciation value based on the percentage of the property that they owned. Pretty cool, right?
              </p>
              <h2 className="blog-2"><b>May 1 — May 31</b></h2>
              <p className="blog-text">
                My first few days at Meridio were pretty hectic, as I got onboarded and familiarized myself with the codebase. The whole of the spoke was remote, and so I was actually the only person in my office who was part of Meridio. To stay synced, the dev team had stand up calls every morning at 9:45, and were constantly talking on Slack. 
                <br/>
                <br/>
                I got into the groove of things pretty quickly however, as I was familiar with most of the stack they used <i>(React, Redux)</i>. It did however, take a couple days for me to get used to the other technologies they used, such as <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer">Jira</a>, and <a href="https://zoom.us" target="_blank" rel="noopener noreferrer">Zoom</a>. After getting set up though, I started working on some small tickets and bug fixes, such as fixing a misalignment issue of the website's footer.
                <br/>
                <br/>
                Because Meridio was such an early stage startup, I was able to witness a lot of change, even within my first month there. There was an MVP <i>(minimum viable product)</i> launch, as well as a complete overhaul of the landing page.
              </p>
              <div className="blog-image-div center">
                <img
                      className="blog-image"
                      src="/assets/consensys/meridio-landing1.png"
                      alt="Meridio's Landing Page"
                    />
                <h6 className="blog-6">Meridio's Landing Page</h6>
              </div>
              <p className="blog-text">
                Although I wasn't a huge part of the changes mentioned above, I did start to take on a larger role within the company. Starting the second half of May and into June, I started taking lead on several aspects of the code, from implementing the redesigns created by the design team, to migrating much of the frontend over to a new version of the API, due to a backend database migration from <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a> to <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a>.
                <br/>
                <br/>
                Meridio is planning on launching their private beta soon for accredited investors, and I can't wait to contribute and help get the release out in good shape and on time!
              </p>
              <h2 className="blog-2"><b>June 1 — June 30</b></h2>
                <p className="blog-text">
                  <b>Note: I'm writing this near the end of August...oops 😅</b>
                  <br/>
                  <br/>
                  June was a pretty good month for me. John ended up going to the Himalayas for vacation, leaving me as the main frontend developer. In this time, I got to work on some of Lucia's designs, including the new modal design as well as the new sidebar. Here's some screenshots of those:
                </p>
                <div className="blog-image-div center">
                <img
                      className="blog-image"
                      src="/assets/consensys/error-modal.png"
                      alt="Error Modal"
                    />
                <h6 className="blog-6">Error Modal</h6>
              </div>
              <div className="blog-image-div center">
                <img
                      className="blog-image"
                      src="/assets/consensys/sidebar.png"
                      alt="Sidebar"
                    />
                <h6 className="blog-6">The New Sidebar</h6>
              </div>
              <p className="blog-text">
                  Overall, I'd say I started feeling like a real member of the team at this point, especially with the level of responsibility I had to take on during John's absence.
                </p>
              <h2 className="blog-2"><b>July 1 — July 30</b></h2>
              <p className="blog-text">
                July was a lot of the same, just with even bigger features. The main feature that I worked on during july was the <b>Sponsor Dashboard.</b> It was a comprehensive page that offered token/asset sponsors to view the performance of their asset, and see information such as a history transactions, and all the investors that were currently trading their property/token.
                <br/>
                <br/>
                It was quite a large page with a bunch of new components, so I definitely feel like it helped me improve my technical skills. Here's a couple screenshots from that page:
              </p>
              <div className="blog-image-div center">
                <img
                      className="blog-image"
                      src="/assets/consensys/sponsor-dashboard1.png"
                      alt="Sponsor Dashboard"
                    />
                <h6 className="blog-6">Sponsor Dashboard</h6>
              </div>
              <div className="blog-image-div center">
                <img
                      className="blog-image"
                      src="/assets/consensys/sponsor-dashboard2.png"
                      alt="Anotha one"
                    />
                <h6 className="blog-6">Anotha one</h6>
              </div>
              <h2 className="blog-2"><b>August 1 - August 30</b></h2>
              <p className="blog-text">
                This was my last month working for Meridio <i>(for now)</i>, and it was definitely a bittersweet month. I couldn't help but feel sad that I was leaving this project, as I have to admit that at this point, I feel decently committed to the success and future of the company.
                <br/>
                <br/>
                This feeling was even further pushed along when I flew out to New York to meet the team. <b>Everyone is so nice 😁.</b>
                <br/>
                <br/>
                This month has been just as busy, with me working on new features such as a new and improved profile/wallets page as well as brand new user onboarding, to teach user's how to install and get set up with MetaMask.
                <br/>
                <br/>
                To be honest though, instead of talking about those things, I'd rather just post a couple pictures of New York 🗽.
              </p>
              <div className="blog-image-div center">
                <img
                      className="blog-image"
                      src="/assets/consensys/newyork2.jpeg"
                      alt="Walking to the office"
                    />
                <h6 className="blog-6">Walking to the office</h6>
              </div>
              <div className="blog-image-div center">
                <img
                      className="blog-image"
                      src="/assets/consensys/newyork1.jpeg"
                      alt="Sunset from McKibbin Lofts roof"
                    />
                <h6 className="blog-6">Sunset from the roof of McKibbin Lofts</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsenSys;
