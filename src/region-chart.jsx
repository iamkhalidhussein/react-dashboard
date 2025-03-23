import { useEffect, useRef, useState } from "react"

export function RegionChart() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef(null)

  // Sample data
  const regions = ["Asia", "Europe", "Americas", "Africa", "Middle East", "Pacific"]
  const values = [2201, 2865, 1762, 1591, 1749, 2475]
  const maxValue = 3000

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      })

      const handleResize = () => {
        if (containerRef.current) {
          setDimensions({
            width: containerRef.current.clientWidth,
            height: containerRef.current.clientHeight,
          })
        }
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Calculate center and radius
  const center = {
    x: dimensions.width / 2,
    y: dimensions.height / 2,
  }
  const radius = Math.min(center.x, center.y) * 0.8

  // Generate points for the radar chart
  const generateRadarPoints = () => {
    const angleStep = (Math.PI * 2) / regions.length

    // Generate points for each axis
    const axisPoints = regions.map((_, i) => {
      const angle = i * angleStep - Math.PI / 2 // Start from top
      return {
        x: center.x + radius * Math.cos(angle),
        y: center.y + radius * Math.sin(angle),
      }
    })

    // Generate points for the data polygon
    const dataPoints = values.map((value, i) => {
      const angle = i * angleStep - Math.PI / 2 // Start from top
      const scaledRadius = (value / maxValue) * radius
      return {
        x: center.x + scaledRadius * Math.cos(angle),
        y: center.y + scaledRadius * Math.sin(angle),
      }
    })

    return { axisPoints, dataPoints }
  }

  // Generate concentric circles for the grid
  const generateGridCircles = () => {
    const steps = 4
    return Array.from({ length: steps }).map((_, i) => {
      const stepRadius = ((i + 1) / steps) * radius
      return (
        <circle
          key={`grid-circle-${i}`}
          cx={center.x}
          cy={center.y}
          r={stepRadius}
          fill="none"
          stroke="rgba(0, 0, 0, 0.05)"
          strokeWidth={1}
        />
      )
    })
  }

  // Generate axis lines
  const generateAxisLines = (axisPoints) => {
    return axisPoints.map((point, i) => (
      <line
        key={`axis-${i}`}
        x1={center.x}
        y1={center.y}
        x2={point.x}
        y2={point.y}
        stroke="rgba(0, 0, 0, 0.05)"
        strokeWidth={1}
      />
    ))
  }

  // Generate data polygon
  const generateDataPolygon = (dataPoints) => {
    const pathData = dataPoints.map((point, i) => `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ")

    return (
      <>
        <path d={`${pathData} Z`} fill="rgba(105, 111, 251, 0.2)" stroke="#696ffb" strokeWidth={2} />
        {dataPoints.map((point, i) => (
          <circle
            key={`data-point-${i}`}
            cx={point.x}
            cy={point.y}
            r={4}
            fill="#696ffb"
            stroke="#fff"
            strokeWidth={2}
          />
        ))}
      </>
    )
  }

  // Generate labels
  const generateLabels = (axisPoints) => {
    return regions.map((region, i) => {
      const angle = (i * 2 * Math.PI) / regions.length - Math.PI / 2
      const labelRadius = radius * 1.1
      const x = center.x + labelRadius * Math.cos(angle)
      const y = center.y + labelRadius * Math.sin(angle)

      // Adjust text anchor based on position
      let textAnchor = "middle"
      if (x < center.x - 10) textAnchor = "end"
      if (x > center.x + 10) textAnchor = "start"

      return (
        <text
          key={`label-${i}`}
          x={x}
          y={y}
          textAnchor={textAnchor}
          dominantBaseline="middle"
          fontSize="11"
          fill="#6c757d"
        >
          {region}
        </text>
      )
    })
  }

  if (dimensions.width === 0 || dimensions.height === 0) {
    return <div className="h-[300px] w-full" ref={containerRef}></div>
  }

  const { axisPoints, dataPoints } = generateRadarPoints()

  return (
    <div className="h-[300px] w-full" ref={containerRef}>
      <svg width={dimensions.width} height={dimensions.height}>
        {/* Grid circles */}
        {generateGridCircles()}

        {/* Axis lines */}
        {generateAxisLines(axisPoints)}

        {/* Data polygon */}
        {generateDataPolygon(dataPoints)}

        {/* Labels */}
        {generateLabels(axisPoints)}
      </svg>
    </div>
  )
}

