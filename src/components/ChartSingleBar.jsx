import { useRef } from "react";
import Chart from "react-apexcharts";
import UpArraow from "./svg-arrow/UpArraow";
import SideArrow from "./svg-arrow/SideArrow";
// import { HiOutlineArrowLongLeft } from "react-icons/hi2";

const ChartSingleBar = ({max,tickAmount,leftTitle,data,y}) => {
  const chartRef = useRef(null);

  const series = [
    {
      name:leftTitle,
      data
    },
  ];

  const options = {
    title: {
      text: leftTitle,
      style: {
        fontSize: 14,
        fontWeight: 500,
        fontFamily: "Poppins",
        color: "#000000",
      },
    },
    chart: {
      width: '100%',
      toolbar: {
        show: false,
      },
    },
    grid: {
      row: {
        colors: ['transparent'], // Set the row gridline color to transparent to hide solid lines
        opacity: 0.8, // Adjust opacity if needed
      },
      borderColor: '#e0e0e0',
      strokeDashArray: 5, // Set the length of the dashed line
    },
    xaxis: {
      labels: {
        formatter: function (val) {
          return val + "%";
        },
        style: {
          fontSize: "14",
          fontFamily: "poppins",
          fontWeight: 600,
          colors: ["#000"],
        },
      },
      title: {
        // text: leftTitle,
        style: {
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Poppins",
          color: "#1492E6",
        },
      },
      categories: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
      tickAmount:10
    },
    yaxis: {
      labels: {
        formatter: (val) => {
          return val + "%";
        },
        style: {
          fontSize: "14",
          fontFamily: "poppins",
          fontWeight: 600,
          colors: ["#000"],
        },
      },
      title: {
        // text: "Incentive percentage",
        style: {
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Poppins",
          color: "#1492E6",
        },
      },
      min:0,
      max,
      tickAmount
    },

    dataLabels: {
      enabled: true,
      enabledOnSeries: undefined,
    
      formatter: function (val) {
        // Check if the value is 0, and return an empty string if true
        if (val === 0) {
          return "";
        }
        return y +"," + val + "%";
      },
      textAnchor: "top",
      distributed: false,
      offsetX: -20,
      offsetY: -22,
      style: {
        fontSize: "14px",
        fontFamily: "poppins",
        fontWeight: 500,
        colors: ["#000"],
      },
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "10%",
        distributed: false,
        borderRadiusApplication: "last",
        borderRadiusWhenStacked: 'last',
        dataLabels: {
          position: "top",
        },
        colors: {
          ranges: [
            {
              from: 0,
              to: 100,
              color: "#09F",
            },

          ],
        },
      },
    },

    fill: {
      type: "gradient",
      gradient: {
        // Setting gradient from bottom to top
       shade:"dark",
        type: "vertical",
        shadeIntensity: 0.9,
        gradientToColors: ["#E1F3FF"],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [80, 100],
        hover: {
            opacity: null,
          },
      },
    },
  };

  return (
    <div className="w-full relative p-5">
      <Chart
        ref={chartRef}
        type="bar"
        series={series}
        options={options}
        className="relative"
      ></Chart>
 <UpArraow className="absolute top-[28%] left-[18px] transform rotate-180"/>
      <div className="flex flex-col absolute top-[60%] left-[30px]">
     <span className="inline-block transform -rotate-90 origin-bottom-left text-[#1492E6] text-[12px] font-medium">Incentive percentage</span>
     </div>
     <UpArraow className="absolute top-[66%] left-[18px]"/>
     
      <div className="flex justify-center gap-4 items-center">
      <SideArrow/>
     <span className="inline-block text-[#1492E6] text-[12px] font-medium">{leftTitle}</span>
     <SideArrow className="transform rotate-180"/>
      </div>


       <button
        className="absolute top-4 right-4 text-base font-medium leading-[32px] text-[#1492E6] bg-[#E7F5FF] rounded-[5px] tracking-[-0.32px] px-[30px]"
        // onClick={handleButtonClick}
      >
        Achived
      </button>
      <p className="text-center text-[#000 text-sm font-medium">{leftTitle}: <span className="text-[#70CA62]">{y}%</span></p>
    </div>
  );
};

export default ChartSingleBar;
