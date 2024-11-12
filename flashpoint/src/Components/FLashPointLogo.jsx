const FlashPointsLogo = () => {
  return (
    <div className="w-full max-w-lg">
      <svg viewBox="0 0 400 120" className="w-full h-full">
        <defs>
          <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#4a90e2", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#357abd", stopOpacity: 1 }}
            />
          </linearGradient>

          {/* Animation for the card pulse */}
          <animateTransform
            xlinkHref="#card"
            attributeName="transform"
            attributeType="XML"
            type="scale"
            values="1 1;1.1 1;1 1"
            dur="4s"
            repeatCount="indefinite"
          />
        </defs>

        {/* Background card */}
        <g id="card" transform="translate(20,20)">
          <rect
            x="-3"
            y="0"
            width="360"
            height="80"
            rx="5"
            fill="url(#cardGradient)"
            stroke="#2c3e50"
            strokeWidth="2"
          />
        </g>

        {/* Main text */}
        <text
          x="200"
          y="65"
          textAnchor="middle"
          fontFamily="Fira Code, sans-serif"
          fontSize="34"
          fontWeight="bold"
          fill="#fff"
        >
          FlashPoints
        </text>

        {/* Scrolling points */}
        <g>
          {/* First number */}
          <text
            id="number1"
            x="330"
            y="60"
            fontFamily="Arial, sans-serif"
            fontSize="24"
            fill="#ffd700"
            textAnchor="middle"
          >
            +5
            <animate
              attributeName="y"
              values="0;60;60;120"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur="3s"
              repeatCount="indefinite"
            />
          </text>

          {/* Second number (delayed start) */}
          <text
            id="number2"
            x="330"
            y="60"
            fontFamily="Arial, sans-serif"
            fontSize="24"
            fill="#ffd700"
            textAnchor="middle"
          >
            +3
            <animate
              attributeName="y"
              values="0;60;60;120"
              dur="3s"
              begin="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur="3s"
              begin="1s"
              repeatCount="indefinite"
            />
          </text>

          {/* Third number (more delayed start) */}
          <text
            id="number3"
            x="330"
            y="60"
            fontFamily="Arial, sans-serif"
            fontSize="24"
            fill="#ffd700"
            textAnchor="middle"
          >
            +4
            <animate
              attributeName="y"
              values="0;60;60;120"
              dur="3s"
              begin="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur="3s"
              begin="2s"
              repeatCount="indefinite"
            />
          </text>
        </g>
      </svg>
    </div>
  );
};

export default FlashPointsLogo;
