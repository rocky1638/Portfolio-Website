import React, { Component } from 'react';

class ConsenSys extends Component {
  componentDidMount() {
    document.body.className = 'white';
  }

  render() {
    return (
      <div className="container-fluid" style={{ paddingBottom: '25px' }}>
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
                <p className="blog-3">Coming Soon...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsenSys;
