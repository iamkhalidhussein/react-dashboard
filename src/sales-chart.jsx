import { useEffect, useRef, useState } from "react";

export function SalesChart() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef(null)

  // Sample data
  const revenueData = [15000, 18000, 16000, 19000, 16000, 15000, 13000, 11000, 14000, 16000]
  const targetData = [12000, 14000, 18000, 16000, 15000, 17000, 16000, 14000, 13000, 12000]
  const months = [
    "Apr 2023",
    "May 2023",
    "Jun 2023",
    "Jul 2023",
    "Aug 2023",
    "Sep 2023",
    "Oct 2023",
    "Nov 2023",
    "Dec 2023",
    "Jan 2024",
  ]

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

  // Chart dimensions
  const padding = { top: 20, right: 20, bottom: 40, left: 50 }
  const chartWidth = dimensions.width - padding.left - padding.right
  const chartHeight = dimensions.height - padding.top - padding.bottom

  // Max value for scaling
  const maxValue = 25000

  // Generate path for a line
  const generateLinePath = (data) => {
    if (chartWidth <= 0 || chartHeight <= 0) return ""

    const xStep = chartWidth / (data.length - 1)

    return data
      .map((value, index) => {
        const x = index * xStep
        const y = chartHeight - (value / maxValue) * chartHeight
        return `${index === 0 ? "M" : "L"} ${x} ${y}`
      })
      .join(" ")
  }

  // Generate area path (line + bottom enclosure)
  const generateAreaPath = (data) => {
    if (chartWidth <= 0 || chartHeight <= 0) return ""

    const xStep = chartWidth / (data.length - 1)

    let path = data
      .map((value, index) => {
        const x = index * xStep
        const y = chartHeight - (value / maxValue) * chartHeight
        return `${index === 0 ? "M" : "L"} ${x} ${y}`
      })
      .join(" ")

    // Close the path to the bottom
    path += ` L ${(data.length - 1) * xStep} ${chartHeight} L 0 ${chartHeight} Z`

    return path
  }

  // Generate grid lines
  const generateGridLines = () => {
    const ySteps = 5
    const yStepSize = chartHeight / ySteps
    const yLines = []

    for (let i = 0; i <= ySteps; i++) {
      const y = i * yStepSize
      yLines.push(
        <line key={`y-${i}`} x1={0} y1={y} x2={chartWidth} y2={y} stroke="rgba(0, 0, 0, 0.05)" strokeWidth={1} />,
      )
    }

    const xSteps = months.length - 1
    const xStepSize = chartWidth / xSteps
    const xLines = []

    for (let i = 0; i <= xSteps; i++) {
      const x = i * xStepSize
      xLines.push(
        <line key={`x-${i}`} x1={x} y1={0} x2={x} y2={chartHeight} stroke="rgba(0, 0, 0, 0.05)" strokeWidth={1} />,
      )
    }

    return [...yLines, ...xLines]
  }

  // Generate x-axis labels
  const generateXLabels = () => {
    const xStep = chartWidth / (months.length - 1)

    return months.map((month, index) => {
      const x = index * xStep
      return (
        <text key={`x-label-${index}`} x={x} y={chartHeight + 20} textAnchor="middle" fontSize="10" fill="#6c757d">
          {month}
        </text>
      )
    })
  }

  // Generate y-axis labels
  const generateYLabels = () => {
    const ySteps = 5
    const yStepSize = chartHeight / ySteps
    const valueStep = maxValue / ySteps

    return Array.from({ length: ySteps + 1 }).map((_, index) => {
      const y = chartHeight - index * yStepSize
      const value = index * valueStep

      return (
        <text
          key={`y-label-${index}`}
          x={-10}
          y={y + 4} // +4 for vertical alignment
          textAnchor="end"
          fontSize="10"
          fill="#6c757d"
        >
          ${value / 1000}k
        </text>
      )
    })
  }

  // Highlight specific point (November data point)
  const highlightPoint = () => {
    const xStep = chartWidth / (revenueData.length - 1)
    const index = 7 // November
    const x = index * xStep
    const y = chartHeight - (revenueData[index] / maxValue) * chartHeight

    return (
      <g>
        <circle cx={x} cy={y} r={6} fill="#696ffb" stroke="#fff" strokeWidth={2} />
        <foreignObject x={x - 50} y={y - 50} width={100} height={40}>
          <div
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "4px",
              fontSize: "12px",
              transform: "translate(-50%, -100%)",
              width: "fit-content",
              textAlign: "center",
            }}
          >
            Revenue:
            <br />
            15,780.21
          </div>
        </foreignObject>
      </g>
    )
  }

  if (dimensions.width === 0 || dimensions.height === 0) {
    return <div className="h-[300px] w-full" ref={containerRef}></div>
  }

  return (
    <div className="h-[300px] w-full" ref={containerRef}>
      <svg width={dimensions.width} height={dimensions.height}>
        <g transform={`translate(${padding.left}, ${padding.top})`}>
          {/* Grid lines */}
          {generateGridLines()}

          {/* Area fills */}
          <path d={generateAreaPath(revenueData)} fill="rgba(105, 111, 251, 0.2)" opacity={0.7} />
          <path d={generateAreaPath(targetData)} fill="rgba(255, 158, 43, 0.2)" opacity={0.7} />

          {/* Lines */}
          <path d={generateLinePath(revenueData)} stroke="#696ffb" strokeWidth={2} fill="none" />
          <path d={generateLinePath(targetData)} stroke="#ff9e2b" strokeWidth={2} fill="none" />

          {/* Axis labels */}
          {generateXLabels()}
          {generateYLabels()}

          {/* Highlight point */}
          {highlightPoint()}
        </g>
      </svg>
    </div>
  )
}

