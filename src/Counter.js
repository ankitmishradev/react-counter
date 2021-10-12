import React from "react";
import moment from "moment";

class ReactCounter extends React.Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const then = moment("01 01 2022, 10:00 am", "MM DD YYYY, hh:mm a");
      const now = moment();
      const days = then.diff(now, "d");
      const hours = then.diff(now, "h") % days;
      const minutes = (then.diff(now, "m") % (days * 1440)) % (hours * 60);
      const seconds =
        ((then.diff(now, "s") % (days * 86400)) % (hours * 3600)) %
        (minutes * 60);
      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    const daysRadius = mapNumber(days, 100, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    return (
      <div className="react-counter">
        <ComingSoonCounterBlock title="Days" value={days} radius={daysRadius} />
        <ComingSoonCounterBlock
          title="Hours"
          value={hours}
          radius={hoursRadius}
        />
        <ComingSoonCounterBlock
          title="Minutes"
          value={minutes}
          radius={minutesRadius}
        />
        <ComingSoonCounterBlock
          title="Seconds"
          value={seconds}
          radius={secondsRadius}
        />
      </div>
    );
  }
}

class SVGCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }
  render() {
    const svgDT = calcDimensions(this.state.windowWidth) / 2;
    return (
      <svg className="react-counter-svg">
        <path
          fill="none"
          stroke="rgb(215, 215, 215)"
          strokeWidth="4"
          d={defineArc(svgDT, svgDT, svgDT - 2, 0, this.props.radius)}
        />
      </svg>
    );
  }
}

const ComingSoonCounterBlock = ({ value, title, radius }) => (
  <div className="react-counter-block">
    <SVGCircle radius={radius} />
    <div className="react-counter-value">{value}</div>
    <div className="react-counter-title">{title}</div>
  </div>
);

function calcDimensions(windowWidth) {
  if (windowWidth > 900) {
    return 100;
  } else if (900 >= windowWidth && windowWidth > 600) {
    return 90;
  } else if (600 >= windowWidth && windowWidth > 350) {
    return 80;
  } else {
    return 70;
  }
}

function cartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function defineArc(x, y, radius, startAngle, endAngle) {
  var start = cartesian(x, y, radius, endAngle);
  var end = cartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

export default ReactCounter;
