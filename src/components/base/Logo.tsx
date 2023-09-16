import classNames from "classnames";

type LogoProps = {
  width?: number;
  height?: number;
  viewBox?: string;
  animated?: boolean;
  loading?: boolean;
  className?: string;
};

const Logo: React.FC<LogoProps> = ({
  width = 80,
  height = 80,
  animated = false,
  loading = false,
  className,
}) => {
  const classes = classNames({
    "scale-150": animated || loading,
    "scale-100": !animated,
    "h-full transform origin-center transition duration-500": true,
    [className!]: className,
  });
  return (
    <div className={classes}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width * 0.45} ${height * 0.45}`}
        role="img"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill="#E1E8ED"
          d="M31.301 11H4.668a3 3 0 1 0 0 6c.182 0 .357-.023.53-.053L5.182 17l.637 14.004C5.918 33.202 7.8 35 10 35h16c2.2 0 4.082-1.798 4.182-3.996L30.818 17l-.015-.05c.163.027.327.05.498.05a3 3 0 1 0 0-6z"
        ></path>

        <path
          fill="#FFD983"
          d="M30.929 11.07c.043-.184.071-.373.071-.57c0-.674-.27-1.284-.704-1.733c.422-.266.704-.732.704-1.267a1.5 1.5 0 0 0-2.058-1.39a1.494 1.494 0 0 0-1.052-1.052A1.5 1.5 0 0 0 26.5 3c-.191 0-.372.039-.54.104a2.495 2.495 0 1 0-4.897.94c-.64.113-1.19.469-1.563.969A2.49 2.49 0 0 0 17.5 4A2.5 2.5 0 0 0 15 6.5l.001.012a2.463 2.463 0 0 0-1.047-.466A2.496 2.496 0 0 0 11.5 4a2.496 2.496 0 0 0-2.455 2.055A3.495 3.495 0 0 0 8.5 6A3.5 3.5 0 0 0 5 9.5c0 .545.135 1.054.357 1.514A1.495 1.495 0 0 0 5.5 14h25a1.495 1.495 0 0 0 .429-2.93z"
        ></path>

        <g fill="#FFAC33">
          <circle cx="28" cy="8" r="1"></circle>
          <circle cx="24.5" cy="5.5" r="1.5"></circle>
          <circle cx="12" cy="7" r="1"></circle>
          <path d="M31 12.5a1.497 1.497 0 0 0-2.914-.483C28.057 12.015 28.031 12 28 12a1 1 0 0 0-1 1h3.908c.056-.157.092-.324.092-.5zM9.5 12c.198 0 .385.04.558.11A1.496 1.496 0 0 1 13 12.5c0 .176-.036.343-.092.5h4.184a1.483 1.483 0 0 1-.092-.5a1.5 1.5 0 0 1 1.5-1.5c.237 0 .459.06.658.158A1.485 1.485 0 0 1 19 10.5a1.5 1.5 0 1 1 2.89.558c.638.172 1.11.749 1.11 1.442c0 .176-.036.343-.092.5h2.968l-.566-.5c.42-.367.69-.899.69-1.5a2 2 0 0 0-2-2a1.98 1.98 0 0 0-1.03.294c.015-.097.03-.193.03-.294a1.997 1.997 0 0 0-3.816-.828A1.488 1.488 0 0 0 18.5 8a1.5 1.5 0 0 0-1.39 2.058c-.638.173-1.11.75-1.11 1.442c0 .198.04.385.11.558a1.49 1.49 0 0 0-.61.332a1.487 1.487 0 0 0-1-.39c-.237 0-.459.06-.659.159c.099-.2.159-.422.159-.659a1.5 1.5 0 0 0-2.058-1.39a1.496 1.496 0 1 0-2.832.948a1.49 1.49 0 0 0-.61.332a1.487 1.487 0 0 0-1-.39A1.5 1.5 0 0 0 6 12.5c0 .176.036.343.092.5h2c.207-.581.756-1 1.408-1z"></path>
        </g>

        <path fill="#FFF" d="M4 13v1a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-1H4z"></path>

        {loading && (
          <>
            <mask id="mask" x="0" y="0" width="35.6" height="35">
              <path
                mask="url(#mask)"
                d="M28.668 17v16.989c.863-.734 1.444-1.796 1.492-2.986L30.84 17h-2.172zm-6 0h3v18h-3zm-6 18V17h3v18zm-6-18h3v18h-3zM5.16 17l.68 14.003c.054 1.342.776 2.528 1.828 3.254V17H5.16z"
                fill="white"
              ></path>
              <rect
                x="-1.8"
                fill="black"
                width="4"
                height="100"
                transform="translate(0) rotate(180 3 50)"
              >
                <animate
                  attributeName="height"
                  attributeType="XML"
                  dur="1.1s"
                  values="30; 100; 30"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="26.215"
                fill="black"
                width="4"
                height="100"
                transform="translate(0) rotate(180 20 50)"
              >
                <animate
                  attributeName="height"
                  attributeType="XML"
                  dur="1s"
                  values="30; 100; 30"
                  repeatCount="indefinite"
                  begin="0.1s"
                />
              </rect>
              <rect
                x="76.1"
                fill="black"
                width="4"
                height="100"
                transform="translate(0) rotate(180 48 50)"
              >
                <animate
                  attributeName="height"
                  attributeType="XML"
                  dur="1s"
                  values="30; 100; 30"
                  repeatCount="indefinite"
                  begin="0.3s"
                />
              </rect>
              <rect
                x="90.1"
                fill="black"
                width="4"
                height="100"
                transform="translate(0) rotate(180 58 50)"
              >
                <animate
                  attributeName="height"
                  attributeType="XML"
                  dur="1s"
                  values="30; 100; 30"
                  repeatCount="indefinite"
                  begin="0.5s"
                />
              </rect>
              <rect
                x="120.4"
                fill="black"
                width="4"
                height="100"
                transform="translate(0) rotate(180 76 50)"
              >
                <animate
                  attributeName="height"
                  attributeType="XML"
                  dur="1s"
                  values="30; 100; 30"
                  repeatCount="indefinite"
                  begin="0.1s"
                />
              </rect>
            </mask>

            <path
              mask="url(#mask)"
              d="M28.668 17v16.989c.863-.734 1.444-1.796 1.492-2.986L30.84 17h-2.172zm-6 0h3v18h-3zm-6 18V17h3v18zm-6-18h3v18h-3zM5.16 17l.68 14.003c.054 1.342.776 2.528 1.828 3.254V17H5.16z"
              fill="#DA2F47"
            ></path>
          </>
        )}

        {!loading && (
          <path
            d="M28.668 17v16.989c.863-.734 1.444-1.796 1.492-2.986L30.84 17h-2.172zm-6 0h3v18h-3zm-6 18V17h3v18zm-6-18h3v18h-3zM5.16 17l.68 14.003c.054 1.342.776 2.528 1.828 3.254V17H5.16z"
            fill="#DA2F47"
          ></path>
        )}

        <path opacity=".6" fill="#99AAB5" d="M5.16 17l.097 2h25.485l.098-2z"></path>
      </svg>
    </div>
  );
};

export default Logo;
