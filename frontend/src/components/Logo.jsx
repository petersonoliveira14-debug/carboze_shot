export default function Logo({ size = 140 }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.38)}
      viewBox="0 0 370 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CarboZé"
    >
      {/* CARBO */}
      <text
        x="0"
        y="110"
        fontFamily="'Barlow Condensed', Impact, 'Arial Narrow', sans-serif"
        fontWeight="900"
        fontSize="130"
        fill="#FFFFFF"
        letterSpacing="-4"
      >
        CARBO
      </text>
      {/* ZÉ */}
      <text
        x="278"
        y="110"
        fontFamily="'Barlow Condensed', Impact, 'Arial Narrow', sans-serif"
        fontWeight="900"
        fontSize="130"
        fill="#6CC000"
        letterSpacing="-4"
      >
        ZÉ
      </text>
      {/* water droplet over É */}
      <path
        d="M348 8 C348 8 340 20 340 26 C340 30.4 343.6 34 348 34 C352.4 34 356 30.4 356 26 C356 20 348 8 348 8Z"
        fill="#6CC000"
      />
    </svg>
  )
}
