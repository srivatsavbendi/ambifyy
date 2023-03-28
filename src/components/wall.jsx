import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from './card';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.videoRefs = {};
    this.observer = null;
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(this.handleIntersection, {
      rootMargin: '0px',
      threshold: 0.5, // Load video when at least 50% of the card is visible
    });

    Object.keys(this.videoRefs).forEach((bgPath) => {
      this.observer.observe(this.videoRefs[bgPath]);
    });
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { target } = entry;
        const { bgPath } = target.dataset;

        if (this.videoRefs[bgPath]) {
          const video = this.videoRefs[bgPath].querySelector('video');
          if (video) {
            video.load();
          }
        }

        this.observer.unobserve(target);
      }
    });
  };

  setVideoRef = (bgPath, node) => {
    if (node) {
      this.videoRefs[bgPath] = node;
    }
  };

  render() {
    return (
      <div className="row m-4 mt-5">
        <div className="row mt-3">
          <div className="col-4 mt-5">
            <Card bgPath="watershoes.mov" title="Standing In The Rain" tag1="Animated" tag2="Rain" tag3="Sneakers">
              <video
                ref={(node) => this.setVideoRef('watershoes.mov', node)}
                data-bg-path="watershoes.mov"
                muted
                playsInline
              >
                <source src="watershoes.mp4" type="video/mp4" />
              </video>
            </Card>
            <Card bgPath="spaceastronautstaringoutofwindow.mov" title="Astronaut Gazing At The Stars" tag1="Animated" tag2="Space" tag3="Astronaut">
              <video
                ref={(node) => this.setVideoRef('spaceastronautstaringoutofwindow.mov', node)}
                data-bg-path="spaceastronautstaringoutofwindow.mov"
                muted
                playsInline
              >
                <source src="spaceastronautstaringoutofwindow.mp4" type="video/mp4" />
              </video>
            </Card>
            <Card bgPath="paristrain.mp4" title="Train Through Paris " tag1="Landscape" tag2="City" tag3="Night">
              <video
                ref={(node) => this.setVideoRef('paristrain.mp4', node)}
                data-bg-path="paristrain.mp4"
                muted
                playsInline
              >
                <source src="paristrain.mp4" type="video/mp4" />
              </video>
            </Card>
            <Card bgPath="girlstudying.mov" title="Cozy Studying" tag1="Animated" tag2="Room" tag3="Chill">
              <video
                ref={(node) => this.setVideoRef('girlstudying.mov', node)}
                data-bg-path="girlstudying.mov"
                muted
                playsInline
              >
                <source src="girlstudying.mov" type="video/mp4" />
              </video>
            </Card>
            <Card bgPath="europeandaylight.mp4" title="European Springs" tag1="Landscape" tag2="City" tag3="Day">
              <video
                ref={(node) => this.setVideoRef('europeandaylight.mp4', node)}
                data-bg-path="europeandaylight.mp4"
                muted
                playsInline
              >
                <source src="europeandaylight.mp4" type="video/mp4" />
              </video>
            </Card>
          </div>



          <div className="col-4 mt-5">
            <Card bgPath="darkalley.mov" title="Dark Alley At Night" tag1="Animated" tag2="Rain" tag3="Night">
              <video
                ref={(node) => this.setVideoRef('darkalley.mov', node)}
                data-bg-path="darkalley.mov"
                muted
                playsInline
              >
                <source src="darkalley.mp4" type="video/mp4" />
              </video>
            </Card>
            <Card bgPath="nightparking.mp4" title="Chill In The Car" tag1="Landscape" tag2="City" tag3="Night">
              <video
                ref={(node) => this.setVideoRef('nightparking.mp4', node)}
                data-bg-path="nightparking.mp4"
                muted
                playsInline
              >
                <source src="nightparking.mp4" type="video/mp4" />
              </video>
            </Card>
            <Card bgPath="rainleaves.mp4" title="Rainfall On Leaves" tag1="Animated" tag2="Rain" tag3="Nature">
              <video
                ref={(node) => this.setVideoRef('rainleaves.mp4', node)}
                data-bg-path="rainleaves.mp4"
                muted
                playsInline
              >
                <source src="rainleaves.mp4" type="video/mp4" />
              </video>
            </Card>
            <Card bgPath="snowycozycabin.mov" title="Cozy Cabin In The Winter" tag1="Animated" tag2="Snow" tag3="Cabin">
              <video
                ref={(node) => this.setVideoRef('snowycozycabin.mov', node)}
                data-bg-path="snowycozycabin.mov"
                muted
                playsInline
              >
                <source src="snowycozycabin.mov" type="video/mp4" />
              </video>
            </Card>
            <Card bgPath="snowytracks.mp4" title="Snowy Tracks" tag1="Landscape" tag2="Snow" tag3="City">
              <video
                ref={(node) => this.setVideoRef('snowytracks.mp4', node)}
                data-bg-path="snowytracks.mp4"
                muted
                playsInline
              >
                <source src="snowytracks.mp4" type="video/mp4" />
              </video>
            </Card>
          </div>



          <div className="col-4 mt-5">
            <Card bgPath="girlonledge.mov" title="Sitting On A Ledge" tag1="Animated" tag2="City" tag3="Girl">
              <video
                ref={(node) => this.setVideoRef('girlonledge.mov', node)}
                data-bg-path="girlonledge.mov"
                muted
                playsInline
              >
                <source src="girlonledge.mp4" type="video/mp4" />
              </video>
            </Card>
            <Card bgPath="musicrecord.mp4" title="Spinning Records" tag1="Everyday" tag2="Room" tag3="Day">
              <video
                ref={(node) => this.setVideoRef('musicrecord.mp4', node)}
                data-bg-path="musicrecord.mp4"
                muted
                playsInline
              >
                <source src="musicrecord.mp4" type="video/mp4" />
              </video>
            </Card>
            <Card bgPath="snowycity.mov" title="Snowy City" tag1="Animated" tag2="Snow" tag3="Night">
              <video
                ref={(node) => this.setVideoRef('snowycity.mov', node)}
                data-bg-path="snowycity.mov"
                muted
                playsInline
              >
                <source src="snowycity.mov" type="video/mp4" />
              </video>
            </Card>
            <Card bgPath="floorleaves.mp4" title="Fall Rain" tag1="Landscape" tag2="Rain" tag3="Day">
              <video
                ref={(node) => this.setVideoRef('floorleaves.mp4', node)}
                data-bg-path="floorleaves.mp4"
                muted
                playsInline
              >
                <source src="floorleaves.mp4" type="video/mp4" />
              </video>
            </Card>
            <Card bgPath="lushwaterfall.mp4" title="Lush Waterfall" tag1="Landscape" tag2="Nature" tag3="Day">
              <video
                ref={(node) => this.setVideoRef('lushwaterfall.mp4', node)}
                data-bg-path="lushwaterfall.mp4"
                muted
                playsInline
              >
                <source src="lushwaterfall.mp4" type="video/mp4" />
              </video>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Wall;
