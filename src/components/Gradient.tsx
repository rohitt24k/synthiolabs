function Gradient() {
  return (
    <div className="fixed z-[1] w-screen h-screen bg-white opacity-60 overflow-hidden">
      {/* Ellipse 18 */}
      <div
        className="absolute w-[130vw] h-[40vw] top-[-10vw] left-[25vw] opacity-80 blur-[150px] md:blur-[379.21px]"
        style={{
          background:
            "radial-gradient(50% 75.16% at 50% 75.16%, rgba(51,184,255,0.72) 0%, rgba(51,184,255,0) 100%)",
        }}
      />

      {/* Ellipse 19 */}
      <div className="absolute w-[130vw] h-[40vw] left-1/2 top-[60vh] -translate-x-1/2 opacity-80 blur-[150px] md:blur-[379.21px] bg-[#A855F7]" />

      {/* Rectangle (Bottom Gradient) */}
      <div
        className="absolute bottom-0 left-0 w-full h-[50vh]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 100%)",
        }}
      />
    </div>
  );
}

export default Gradient;
