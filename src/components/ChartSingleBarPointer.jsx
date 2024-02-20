import { useRef } from "react";
import Chart from "react-apexcharts";

const ChartSingleBarPointer = ({max,tickAmount,leftTitle,data,y,xAxisCategories,yTitle}) => {
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
      background:'#E1F3FF'
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
          return val ;
        },
        style: {
          fontSize: "14",
          fontFamily: "poppins",
          fontWeight: 600,
          colors: ["#000"],
        },
      },
      title: {
        text: leftTitle,
        style: {
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Poppins",
          color: "#1492E6",
        },
      },
      categories: xAxisCategories,
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
        text: yTitle|| "Points Percentage",
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
        return y + "%" +","+ val + "%";
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
    <div className="w-full relative p-5 bg-[#E1F3FF] rounded-[15px]">
      <Chart
        ref={chartRef}
        type="bar"
        series={series}
        options={options}
      ></Chart>
       <button
        className="absolute top-4 right-4 text-base font-medium leading-[32px] text-[#1492E6] bg-white rounded-[5px] tracking-[-0.32px] px-[30px]"
        // onClick={handleButtonClick}
      >
        Achived
      </button>
      <p className="text-center text-[#000 text-sm font-medium">{leftTitle}: <span className="text-[#70CA62]">{y}$</span></p>
    </div>
  );
};

export default ChartSingleBarPointer;
