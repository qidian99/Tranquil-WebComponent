import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useRef, useEffect } from 'preact/hooks'
import $ from 'jquery';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  root: {
    width: 'fit-content',
    display: 'inline-block',
  },
  progressRing: { transition: "stroke-dashoffset 0.800s", transform: "rotate(-90deg)", transformOrigin: "50% 50%", strokeDasharray: "351.858 351.858", strokeDashoffset: "351.858" },
  title: {
    textAlign: 'center',
  },
  percentage: { fontSize: "32px", fontFamily: "monospace", fill: "#6698FF" }
});

export const PercentageRing = ({
  title,
  percentage,
  width,
}) => {
  const circleRef = useRef(null)
  const classes = useStyles();

  useEffect(() => {
    const circle = circleRef.current;
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    function setProgress(percent) {
      const offset = circumference - percent / 100 * circumference;
      circle.style.strokeDashoffset = offset;
    }

    setProgress(percentage);
  })
  return (
    <div className={classes.root}>
      <svg viewBox="0 0 120 120" width={width}>
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#6698FF" />
            <stop offset="100%" stop-color="#90EE90" />
          </linearGradient>
        </defs>
        <circle stroke="white" stroke-width="8" stroke-linecap="round" fill="transparent" r="56" cx="60" cy="60" />
        <circle className={classes.progressRing} ref={circleRef} data-percentage={percentage} stroke="url(#linear)" stroke-width="8" stroke-linecap="round" fill="transparent" r="56" cx="60" cy="60" />
        <text className={classes.percentage} x="40" y="68">
          {percentage}
        </text>
      </svg>
      <div className={classes.title}>
        {title}
      </div>
    </div>
  )
}


PercentageRing.defaultProps = {
  width: 120,
}
