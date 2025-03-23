import { useEffect, useRef, useState } from "react"
import { Users } from "lucide-react"

export function UserDonut({ totalUsers, premiumUsers, basicUsers }) {
  const containerRef = useRef(null)
  const [size, setSize] = useState(250)

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect()
      setSize(Math.min(width, height))
    }
  }, [])

  // Calculate percentages
  const total = premiumUsers + basicUsers
  const premiumPercentage = (premiumUsers / total) * 100
  const basicPercentage = (basicUsers / total) * 100

  // SVG parameters
  const centerX = size / 2
  const centerY = size / 2
  const radius = size * 0.4
  const strokeWidth = size * 0.08
  const innerRadius = radius - strokeWidth / 2
  const outerRadius = radius + strokeWidth / 2

  // Calculate circumference and stroke-dasharray values
  const circumference = 2 * Math.PI * radius
  const premiumDashArray = (premiumPercentage / 100) * circumference
  const basicDashArray = (basicPercentage / 100) * circumference

  // Calculate stroke-dashoffset
  const premiumDashOffset = 0
  const basicDashOffset = premiumDashArray

  return (
    <div className="relative h-[250px] w-[250px]" ref={containerRef}>

      <DonutChart 
        size={size} 
        centerX={centerX} 
        centerY={centerY} 
        circumference={circumference} 
        premiumDashArray={premiumDashArray}   
        premiumDashOffset={premiumDashOffset} 
        radius={radius} 
        strokeWidth={strokeWidth}
        basicDashArray={basicDashArray}
        basicDashOffset={basicDashOffset}
      />

      <DonutChartContent totalUsers={totalUsers}/>
      <UserCountTypes basicUsers={basicUsers} premiumUsers={premiumUsers}/>

    </div>
  )
}

const DonutChart = ({ 
  size, 
  centerX, 
  centerY, 
  radius, 
  strokeWidth, 
  premiumDashArray, 
  circumference, 
  premiumDashOffset, 
  basicDashArray, 
  basicDashOffset 
}) => {
  return (
    <svg width={size} height={size} className="absolute inset-0">
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="#696ffb"
          strokeWidth={strokeWidth}
          strokeDasharray={`${premiumDashArray} ${circumference - premiumDashArray}`}
          strokeDashoffset={premiumDashOffset}
          transform={`rotate(-90 ${centerX} ${centerY})`}
        />

        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="#b8bbff"
          strokeWidth={strokeWidth}
          strokeDasharray={`${basicDashArray} ${circumference - basicDashArray}`}
          strokeDashoffset={-basicDashOffset}
          transform={`rotate(-90 ${centerX} ${centerY})`}
        />
    </svg>
  ) 
};

const DonutChartContent = ({ totalUsers }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="bg-[#b8bbff] rounded-full p-2 mb-2">
          <Users className="h-5 w-5 text-primary" />
        </div>
        <div className="text-3xl font-bold">{totalUsers.toLocaleString()}</div>
        <div className="text-sm text-gray-500">Total users</div>
    </div>
  )
};

const UserCountTypes = ({ premiumUsers, basicUsers }) => {
  return (
        <div className="absolute bottom-0 -left-16 flex w-[400px] justify-between text-sm px-2">
          <div className="flex items-center">
            <div className="w-2 h-8 bg-primary mr-2"></div>
            <div>
              <div className="font-bold">{premiumUsers.toLocaleString()}</div>
              <div className="text-xs text-gray-500">Premium Users</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-8 bg-[#b8bbff] mr-2"></div>
            <div>
              <div className="font-bold">{basicUsers.toLocaleString()}</div>
              <div className="text-xs text-gray-500">Basic Users</div>
            </div>
          </div>
        </div>
  )
};