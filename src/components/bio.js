import React, {Component} from 'react';
import '../css/bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="bg2">
        <div className="bio">
          <a name="about" />
          <p>
            After graduating from High School in the Bay Area, I relocated to Sacramento to pursue my undergraduate degree. I spent 3 years trying to juggle two jobs, to pay for tuition and rent, while also taking on a full course load. Eventually, school took a back seat to make ends meet.

            Serving my country as an Infantryman was my next step. I served 9 years in the US Army, and obtained the rank of Staff Sergeant. I deployed to multiple combat theaters to include Afghanistan. A shoulder injury cut my career short, but allowed me to finally pursue my childhood dream.

            From the days of dialup, 5" floppy disks, and nights of battle.net and AIM, software development has continuosly sang its siren song. Luring me into a world of 0's and 1's. No longer could I resist the promise...
          </p>
        </div>
        <h2 className="portfolio-pretext">to <code>Int MAX_VALUE + 1</code> and beyond...</h2>
      </div>
    )
  }
};

export default Bio;
