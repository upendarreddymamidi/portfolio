import React, { useState, useEffect, useRef} from "react";
import * as d3 from "d3";
import { Button } from "react-bootstrap";

export default function BarChart(){



const [data, setData] = useState([
  { name: "A", value: 10 },
    { name: "B", value: 20 },
    { name: "C", value: 10 },
    { name: "D", value: 20 },
    { name: "E", value: 20 },
])

 
 // Set up dimensions
 const margin = { top: 0, right: 10, bottom: 30, left: 100 };
 const width = 800 +  200 - margin.left - margin.right;
 const height = 300 - margin.top - margin.bottom;

 useEffect(() => {

  const svg = d3.select('#svg');
   const xScale = d3.scaleBand().domain(data.map((d) => d.name)).range([0, width]).padding(0.5);
   const yScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d.value)]).range([height, 0]);
   // Create bars
   svg
     .selectAll(".bar")
     .data(data)
     .enter()
     .append("rect")
     .attr("class", "bar")
     .attr("x", (d) => xScale(d.name))
     .attr("y", (d) => yScale((d.value)))
     .attr("width", 67)
     .attr("height", (d) => height - yScale((d.value)))
     .attr("transform", "translate(30, 10)") 
     .attr("fill", "steelblue");

   // Create x-axis
   const xAxis = d3.axisBottom(xScale);
   svg.append("g")
   .attr("class", "x-axis")
   .attr("transform", `translate(30,${height+10})`)
   .call(xAxis);

   // Create y-axis
   const yAxis = d3.axisLeft(yScale);
   svg.append("g")
   .attr("transform", "translate(30, 10)") 
   .call(yAxis);
 }, [data]);

    return(
      <>
      <h1> Bar chart</h1>
      <p> Built using D3.js</p>
<svg id= 'svg' style={{padding:"10px"}} width="900px" height="900px" />
{/* <Button onClick={()=> setGrow(grow+1)}> Grow </Button> */}
</> 
    )
}