function GradientBorderBox({
  children,
  gradient,
  borderWidth = 4,
  borderRadius = 12,
  className = "bg-white p-4",
  style,
}: {
  children: React.ReactNode;
  gradient: string;
  borderWidth?: number;
  borderRadius?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "relative",
        padding: borderWidth,
        background: gradient,
        borderRadius: borderRadius,
        display: "inline-block",
      }}
    >
      <div
        className={className}
        style={{
          borderRadius: borderRadius - borderWidth,
          position: "relative",
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default GradientBorderBox;
