import Button from "./components/Button"
import BonusPointBar from "./components/ChartComponent"
import ChartSingleBar from "./components/ChartSingleBar"
import { IdealX1, IdealX2, IdealX3, IdealX4, IdealX5, IdealX6, data1, data2, data3, data4, data5, data6 } from "./utils/chartData"


function App() {


  return (
    <div className="mx-10 bg-white">
      <div className="flex justify-between my-10">
        <div className="flex gap-2.5">
         <Button text="Current" active={true}/>
         <Button text="Held account "/>
         <Button text="Incentive factors"/>
        </div>
        <div className="flex gap-2.5">
        <Button text="Monthly" active={true}/>
         <Button text="Quarterly"/>
         <Button text="Yearly"/>
        </div>
      </div>

      <div className="bg-[#F2F9FE] rounded-[16px]">
        <div className="flex py-[22px] px-[31px] gap-7">
           <div className="flex py-[29px] px-10 w-1/2 bg-[#1492E6] rounded-[9px] gap-2.5 items-center justify-center">
            <div className="bg-[#4CA7E8] p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 25" fill="none">
<path d="M12.5 2.19897C10.5222 2.19897 8.58879 2.78546 6.9443 3.88428C5.29981 4.98309 4.01809 6.54488 3.26121 8.37214C2.50433 10.1994 2.3063 12.2101 2.69215 14.1499C3.078 16.0897 4.03041 17.8715 5.42894 19.27C6.82746 20.6686 8.60929 21.621 10.5491 22.0068C12.4889 22.3927 14.4996 22.1946 16.3268 21.4378C18.1541 20.6809 19.7159 19.3992 20.8147 17.7547C21.9135 16.1102 22.5 14.1768 22.5 12.199C22.5 10.8858 22.2413 9.5854 21.7388 8.37214C21.2362 7.15888 20.4997 6.05649 19.5711 5.12791C18.6425 4.19932 17.5401 3.46273 16.3268 2.96018C15.1136 2.45763 13.8132 2.19897 12.5 2.19897ZM18.18 11.739L16.05 13.919L16.55 17.019C16.5846 17.2074 16.5644 17.4019 16.4917 17.5791C16.4191 17.7564 16.297 17.9091 16.14 18.019C15.9858 18.1259 15.8046 18.1873 15.6172 18.1962C15.4297 18.205 15.2436 18.1609 15.08 18.069L12.5 16.619L9.9 18.049C9.75457 18.1346 9.58877 18.1795 9.42 18.179C9.21269 18.1806 9.01 18.1176 8.84 17.999C8.68304 17.8891 8.56096 17.7364 8.48827 17.5591C8.41558 17.3819 8.39536 17.1874 8.43 16.999L8.94 13.899L6.8 11.739C6.67064 11.6071 6.58031 11.442 6.53904 11.262C6.49778 11.082 6.50718 10.894 6.56621 10.719C6.62524 10.544 6.73159 10.3887 6.87347 10.2705C7.01535 10.1522 7.18721 10.0755 7.37 10.049L10.28 9.59898L11.59 6.81897C11.6644 6.63791 11.7902 6.48265 11.952 6.37244C12.1137 6.26223 12.3043 6.20192 12.5 6.19898C12.6902 6.19761 12.8768 6.25052 13.038 6.35147C13.1992 6.45243 13.3282 6.59726 13.41 6.76898L14.71 9.59898L17.62 10.049C17.8021 10.0762 17.9732 10.1531 18.1143 10.2714C18.2555 10.3896 18.3613 10.5445 18.42 10.719C18.4783 10.8946 18.4867 11.0829 18.4443 11.2629C18.4019 11.443 18.3104 11.6078 18.18 11.739Z" fill="white"/>
</svg></div>
            <div className="text-lg font-medium text-white">Your obtained points: <span className="text-xl font-semibold">500 pt</span></div>
           </div>
           <div className="flex py-[29px] px-10 w-1/2 bg-[#1492E6] rounded-[9px] gap-2.5 items-center justify-center">
            <div className="bg-[#4CA7E8] p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M9.29922 3.77132C9.66953 4.31507 10.0023 5.19163 10.0023 6.48538V10.6854H11.1227L13.0023 12.6026H10.0023V18.0401C10.0023 18.4666 10.1617 18.851 10.4805 19.1979C10.7992 19.5448 11.3195 19.7182 12.0414 19.7182C12.9742 19.7182 13.9586 19.1979 14.9992 18.1573C16.0633 17.0932 16.6258 16.001 16.6773 14.8807L16.1992 14.9229C14.493 14.9229 13.6398 14.0182 13.6398 12.2041C13.6398 11.5901 13.8414 11.0463 14.2398 10.5635C14.6383 10.0854 15.3039 9.84163 16.2367 9.84163C17.2211 9.84163 18.0508 10.2682 18.7164 11.1213C19.4102 11.9744 19.757 13.0151 19.757 14.2385C19.757 16.0526 18.9836 17.7823 17.4367 19.4369C15.918 21.0869 13.0117 21.9166 11.9992 21.9166C10.3773 21.9166 9.75391 21.5979 9.22422 21.2369C8.69453 20.8713 8.00078 20.0088 8.00078 18.9213V12.6026H6.08359L4.24609 10.6854H8.00547V6.88851C8.00547 6.04007 7.15703 5.57601 6.60391 5.52913C6.26641 5.50101 5.89609 5.59476 5.76484 5.73069C5.52578 5.33226 5.29609 4.84944 5.08516 4.29163C5.08516 4.29163 5.27266 3.61663 5.88672 3.21351C6.30859 2.93694 6.70703 2.85257 7.32578 2.85257C8.50234 2.84788 9.04609 3.40101 9.29922 3.77132Z" fill="white"/>
</svg></div>
            <div className="text-lg font-medium text-white">Cash value for every regular point: <span className="text-xl font-semibold">20 Taka</span></div>
           </div>
        </div>
      </div>


<div className="bg-[#F2F9FE] my-8 rounded-[22px]">
<p className="text-[#000] text-xl font-medium pt-6 px-5">Ideal vs Achieved :</p>
<div className="flex gap-5 ">
  <div className="w-1/2  m-5 bg-white rounded-[22px]">
  <BonusPointBar leftTitle="Revision vs Task ratio" yTitle="Incentive percentage" xTitle="Revision Vs Task ratio" xCategory={IdealX1} data={data1} max={100} tickAmount={5}/>
  </div>
  <div className="w-1/2  m-5 bg-white rounded-[22px]">
  <ChartSingleBar
  leftTitle="Revision Vs Task ratio"
  max={100}
  data={[0,0,50]}
  y={22}
  tickAmount={4}
/>
  </div>
</div>
<div className="flex gap-5 ">
  <div className="w-1/2  m-5 bg-white rounded-[22px]">
  <BonusPointBar leftTitle="Goal Achieve Rate" yTitle="Incentive percentage" xTitle="Goal Achieve Rate" xCategory={IdealX2} data={data2} max={100} tickAmount={5}/>
  </div>
  <div className="w-1/2  m-5 bg-white rounded-[22px]">
  <ChartSingleBar
  leftTitle="Goal Achieve Rate"
  max={100}
  data={[0]}
  y={'00'}
  tickAmount={4}
/>
  </div>
</div>

<div className="flex gap-5 ">
  <div className="w-1/2  m-5 bg-white rounded-[22px]">
  <BonusPointBar leftTitle="Negative points vs Positive points" yTitle="Incentive percentage" xTitle="Negative points vs Positive points" xCategory={IdealX1} data={data1} max={100} tickAmount={5}/>
  </div>
  <div className="w-1/2  m-5 bg-white rounded-[22px]">
  <ChartSingleBar
  leftTitle="Negative points vs Positive points "
  max={100}
  data={[0,0,0,0,80]}
  y={37}
  tickAmount={4}
/>
  </div>
</div>

<div className="flex gap-5 ">
  <div className="w-1/2  m-5 bg-white rounded-[22px]">
  <BonusPointBar leftTitle="Percentage of Delayed Projects" yTitle="Incentive percentage" xTitle="Percentage of Delayed Projects" xCategory={IdealX3} data={data3} max={120} tickAmount={6}/>
  </div>
  <div className="w-1/2  m-5 bg-white rounded-[22px]">
  <ChartSingleBar
  leftTitle="Percentage of Delayed Projects "
  max={120}
  data={[0,0,0,120]}
  y={29}
  tickAmount={4}
/>
  </div>
</div>

<div className="flex gap-5 ">
  <div className="w-1/2  m-5 bg-white rounded-[22px]">
  <BonusPointBar leftTitle="Milestone Cancelation Rate" yTitle="Incentive percentage" xTitle="Milestone Cancelation Rate" xCategory={IdealX4} data={data4} max={120} tickAmount={6}/>
  </div>
  <div className="w-1/2  m-5 bg-white rounded-[22px]">
  <ChartSingleBar
  leftTitle="Milestone Cancelation Rate "
  max={120}
  data={[0,120]}
  y={'03'}
  tickAmount={4}
/>
  </div>
</div>
<div className="flex gap-5 ">
  <div className="w-1/2  m-5 bg-white rounded-[22px]">
  <BonusPointBar leftTitle="Deadline Miss Rate" yTitle="Incentive percentage" xTitle="Deadline Miss Rate" xCategory={IdealX5} data={data5} max={100} tickAmount={5}/>
  </div>
</div>
<div className="flex gap-5 ">
  <div className="w-1/2  m-5 bg-white rounded-[22px]">
  <BonusPointBar leftTitle="Client Retention Rate" yTitle="Incentive percentage" xTitle="Client Retention Rate" xCategory={IdealX6} data={data6} max={120} tickAmount={6}/>
  </div>
</div>

</div>
      
    </div>
  )
}

export default App
