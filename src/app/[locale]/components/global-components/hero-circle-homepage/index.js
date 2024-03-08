import * as React from "react";
const HeroCircleHomepage = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Warstwa_2"
    data-name="Warstwa 2"
    viewBox="0 0 599 599"
    {...props}
  >
    <defs>
      <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
        <feOffset />
        <feGaussianBlur result="blur" stdDeviation={19.84} />
        <feFlood floodColor="#000" floodOpacity={0.47} />
        <feComposite in2="blur" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <style>{".cls-1{fill:#010000}"}</style>
    </defs>
    <g id="Warstwa_1-2" data-name="Warstwa 1">
      <circle
        cx={299.41}
        cy={297.42}
        r={218.93}
        style={{
          stroke: "#ca151a",
          strokeWidth: 13,
          strokeMiterlimit: 10,
          fill: "#fff",
        }}
      />
      <circle
        cx={299.41}
        cy={299.32}
        r={218.93}
        style={{
          fill: "none",
          stroke: "#ca151a",
          strokeWidth: 13,
          strokeMiterlimit: 10,
        }}
      />
      <text
        style={{
          fontFamily: "Poppins",
          fontSize: "17.03px",
          fontWeight: 500,
          fill: "#010000",
        }}
        transform="matrix(.96 0 0 1 119.55 229.82)"
      >
        <tspan x={0} y={0}>
          {"meblowe, specjalistyczne i budowlane"}
        </tspan>
      </text>
      <text
        style={{
          fontFamily: "Poppins",
          fontSize: "32.93px",
          fontWeight: 700,
          fill: "#010000",
        }}
        transform="matrix(.96 0 0 1 119.54 268.18)"
      >
        <tspan x={0} y={0}>
          {"p\u0142yty drewnopochodne"}
        </tspan>
      </text>
      <text
        style={{
          fontFamily: "Poppins",
          fontSize: "32.93px",
          fontWeight: 700,
        }}
        transform="matrix(.96 0 0 1 196.64 354.82)"
      >
        <tspan className="cls-1">
          <tspan x={0} y={0}>
            {"parku "}
          </tspan>
        </tspan>
        <tspan x={0} y={39.51} className="cls-1">
          {"maszynowym"}
        </tspan>
        <tspan
          x={240.09}
          y={39.51}
          style={{
            fill: "#ca151a",
          }}
        >
          {"."}
        </tspan>
      </text>
      <path
        d="M186.76 282.15v28.34h27.65v13.14h-27.65v28.33h-14.52v-28.33h-27.65v-13.14h27.65v-28.34h14.52Z"
        style={{
          fill: "#fdd203",
          strokeWidth: 0,
        }}
      />
      <text
        style={{
          fill: "#ca151a",
          fontFamily: "Poppins",
          fontSize: "17.03px",
          fontWeight: 500,
        }}
        transform="matrix(.96 0 0 1 194.75 298.21)"
      >
        <tspan x={0} y={0}>
          {"obrabiane w bogato wyposa\u017Conym"}
        </tspan>
      </text>
      <circle
        cx={299.41}
        cy={299.32}
        r={232.52}
        style={{
          fill: "none",
          filter: "url(#drop-shadow-1)",
          stroke: "#fdd203",
          strokeWidth: "13.81px",
          strokeMiterlimit: 10,
        }}
      />
    </g>
  </svg>
);
export default HeroCircleHomepage;
