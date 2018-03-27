import React, {Component} from 'react';
import '../css/bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="bio-bg">
        <div className="bio">
          <a name="about" alt="bio-link"> </a>
          <h2 className='bio-header'>A little about me...</h2>
          <p>
            After graduating from High School in the Bay Area, I relocated to Sacramento to pursue my undergraduate degree. I spent 3 years trying to juggle two jobs, to pay for tuition and rent, while also taking on a full course load. Eventually, school took a back seat to make ends meet.
          </p>
          <p>
            Serving my country as an Infantryman was my next step. I served 9 years in the US Army, and obtained the rank of Staff Sergeant. I deployed to multiple combat theaters to include Afghanistan. A shoulder injury cut my career short, but allowed me to finally pursue my childhood dream.
          </p>
          <p>
            From the days of dialup, 5" floppy disks, and nights of battle.net and AIM, software development has continuosly sang its siren song. Luring me into a world of 0's and 1's. No longer could I resist the promise...
          </p>
        </div>
      </div>
    )
  }
};

export default Bio;
