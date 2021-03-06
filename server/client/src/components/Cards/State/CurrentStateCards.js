import React from "react";
import { Chart } from "react-google-charts";
// react-bootstrap components
import { Card, Container } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";

import {
   bytesToAdequateValue,
   bitsPerSecondToAdequateValue,
   HzToAdequateValue,
} from "service/UnitsConvertor.js";

export function CircularStateChartCard({
   stateData,
   max,
   stateName,
   convertorCallback,
   baseUnit,
}) {
   const {
      usage,
      allocated,
      free,
      usedPercent,
      allocatedPercent,
      freePercent,
   } = stateData;
   let usageMessage = convertorCallback(usage).getMessage();
   let allocatedMessage = convertorCallback(allocated).getMessage();
   let freeMessage = convertorCallback(free).getMessage();
   return (
      <Card className="card-dashboard">
         <Card.Body className="p-0">
            <Chart
               chartType="PieChart"
               loader={<ClipLoader color={"#212529"} loading={true} size={30} />}
               data={[
                  [
                     "stateType",
                     "amount",
                     {
                        role: "tooltip",
                        type: "string",
                        p: { html: true },
                     },
                  ],
                  [
                     "used",
                     usage,
                     `<div class="ggl-tooltip"><b>used</b><br/>${usageMessage}<br/>${
                        usage + baseUnit
                     }<br/>${usedPercent}%</div>`,
                  ],
                  [
                     "allocated",
                     allocated,
                     `<div class="ggl-tooltip"><b>allocated</b><br/>${allocatedMessage}<br/>${
                        allocated + baseUnit
                     }<br/>${allocatedPercent}%</div>`,
                  ],
                  [
                     "free",
                     free,
                     `<div class="ggl-tooltip"><b>free</b><br/>${freeMessage}<br/>${
                        free + baseUnit
                     }<br/>${freePercent}%</div>`,
                  ],
               ]}
               options={{
                  legend: "bottom",
                  height: 300,
                  chartArea: {
                     width: "100%",
                  },
                  pieHole: 0.8,
                  pieSliceText: "none",
                  slices: {
                     0: { color: "#FB404B" },
                     1: { color: "#FFA534" },
                     2: { color: "#E9ECEF" },
                  },
                  tooltip: { isHtml: true, trigger: "visible" },
                  sliceVisibilityThreshold: 0
               }}
               rootProps={{ "data-testid": "1" }}
            />
            <div className="resource-chart-headding">
               <p className="stat-name">{stateName}</p>
               <p className="used-size">{freeMessage}</p>
               <p className="max-size">{`of ${convertorCallback(
                  max
               ).getMessage()} left`}</p>
            </div>
         </Card.Body>
      </Card>
   );
}

export function DiskCircularStateChartCard({ disk, max }) {
   return (
      <CircularStateChartCard
         stateData={disk}
         max={max}
         stateName={"Disk"}
         convertorCallback={bytesToAdequateValue}
         baseUnit={"B"}
      />
   );
}

export function CPUCircularStateChartCard({ CPU, max }) {
   return (
      <CircularStateChartCard
         stateData={CPU}
         max={max}
         stateName={"CPU"}
         convertorCallback={HzToAdequateValue}
         baseUnit={"Hz"}
      />
   );
}

export function RAMCircularStateChartCard({ RAM, max }) {
   return (
      <CircularStateChartCard
         stateData={RAM}
         max={max}
         stateName={"RAM"}
         convertorCallback={bytesToAdequateValue}
         baseUnit={"B"}
      />
   );
}

export function DownloadCircularStateChartCard({ download, max }) {
   return (
      <CircularStateChartCard
         stateData={download}
         max={max}
         stateName={"Download"}
         convertorCallback={bitsPerSecondToAdequateValue}
         baseUnit={"b/s"}
      />
   );
}

export function UploadCircularStateChartCard({ upload, max }) {
   return (
      <CircularStateChartCard
         max={max}
         stateData={upload}
         stateName={"Upload"}
         convertorCallback={bitsPerSecondToAdequateValue}
         baseUnit={"b/s"}
      />
   );
}
