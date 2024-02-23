import React, { useRef } from "react";
import Chart from "react-apexcharts";
import UpArraow from "./svg-arrow/UpArraow";
import UpArrow from "./svg-arrow/UpArraow";
import SideArrow from "./svg-arrow/SideArrow";

const BonusPointBar = ({leftTitle,yTitle,xTitle,xCategory,max,tickAmount,data}) => {

    console.log(max)
  const chartRef = useRef(null);

  const series = [
    {
      name: "Bonus points amount",
      data: data,
    },
  ];

  const options = {
    title: {
      text: leftTitle,
      style: {
        fontSize: 14,
        fontWeight: 500,
        fontFamily: "Poppins",
        color: "#1492E6",
      },
    },
    chart: {
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
      categories: xCategory,
      labels: {
        formatter: (val) => {
          return `${val}`;
        },
        style: {
          fontSize: "14",
          fontFamily: "poppins",
          fontWeight: 500,
          colors: ["#000000"],
        },
      },
      title: {
        // text: xTitle,
        style: {
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Poppins",
          color: "#1492E6",
        },
      },
      // tickPlacement: "on",
    },
    yaxis: {
      labels: {
        formatter: function (val) {
            return val + "%";
          },
        style: {
          fontSize: "14",
          fontFamily: "poppins",
          fontWeight: 500,
          colors: ["#000000"],
        },
       
      
      },
      title: {
        // text: yTitle ,
        style: {
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Poppins",
          color: "#1492E6",
        },
      },
      min: 0,
      max,
      tickAmount
    },

    dataLabels: {
      enabled: true,
      enabledOnSeries: undefined,
      formatter: function (val) {
        return val + "%";
      },
      textAnchor: "middle",
      distributed: false,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: "14px",
        fontFamily: "poppins",
        fontWeight: 500,
        colors: ["#fff"],
      },
    },

    plotOptions: {
      bar: {
        horizontal: false,
        // columnWidth: "55%",
        endingShape: "rounded",
        distributed: false,
        borderRadius: 10,
        borderRadiusApplication: "last",
        // borderRadiusWhenStacked: 'last',
        dataLabels: {
          position: "top",
        },
        colors: {
          ranges: [
            {
              from: 0,
              to: 20,
              color: "#FFA3A3",
            },
            {
              from: 20,
              to: 40,
              color: "#FEBC05",
            },
            {
              from: 40,
              to: 60,
              color: "#FEBC05",
            },
            {
              from: 60,
              to: 80,
              color: "#09F",
            },
            {
              from: 80,
              to: 100,
              color: "#09F",
            },
            {
              from: 100,
              to: 120,
              color: "#14B96A",
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
    tooltip: {
        enabled: false, // Disable the tooltip
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
     <span className="inline-block text-[#1492E6] text-[12px] font-medium">{xTitle}</span>
     <SideArrow className="transform rotate-180"/>
      </div>
      <button
        className="absolute top-4 right-4 text-base font-medium leading-[32px] text-[#1492E6] bg-[#E7F5FF] rounded-[5px] tracking-[-0.32px] px-[30px]"
        // onClick={handleButtonClick}
      >
        Ideal
      </button>
    </div>
  );
};

export default BonusPointBar;
