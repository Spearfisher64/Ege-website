const CodeGridBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-10"
      >
        {/* Background */}
        <rect width="100%" height="100%" fill="#000000" />

        {/* Grid Lines - Vertical */}
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={`${i * 5}%`}
            y1="0"
            x2={`${i * 5}%`}
            y2="100%"
            stroke="#FF0000"
            strokeWidth="0.5"
            opacity="0.3"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.6;0.3"
              dur="4s"
              repeatCount="indefinite"
              begin={`${i * 0.2}s`}
            />
          </line>
        ))}

        {/* Grid Lines - Horizontal */}
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={`${i * 6.25}%`}
            x2="100%"
            y2={`${i * 6.25}%`}
            stroke="#FF0000"
            strokeWidth="0.5"
            opacity="0.3"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.6;0.3"
              dur="5s"
              repeatCount="indefinite"
              begin={`${i * 0.3}s`}
            />
          </line>
        ))}

        {/* Floating Code Dots */}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx={`${10 + ((i * 12) % 85)}%`}
            cy={`${15 + ((i * 15) % 70)}%`}
            r="1.5"
            fill="#FF0000"
          >
            <animate
              attributeName="cy"
              values={`${15 + ((i * 15) % 70)}%; ${20 + ((i * 15) % 70)}%; ${
                15 + ((i * 15) % 70)
              }%`}
              dur={`${3 + i}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="1.5; 2.5; 1.5"
              dur={`${4 + i}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Floating Brackets ({} or </>) */}
        {["</>", "{}", "[]", "()"].map((symbol, i) => (
          <text
            key={`code-${i}`}
            x={`${20 + i * 15}%`}
            y={`${70 + (i % 2) * 10}%`}
            fontFamily="monospace"
            fontSize="18"
            fill="#FF0000"
            opacity="0.4"
          >
            {symbol}
            <animate
              attributeName="opacity"
              values="0.4;0.8;0.4"
              dur={`${6 + i}s`}
              repeatCount="indefinite"
            />
          </text>
        ))}
      </svg>
    </div>
  );
};

export default CodeGridBackground;
