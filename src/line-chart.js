import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const LineChart = ({width = 600, height = 400, margin = { top: 20, right: 30, bottom: 30, left: 40 } }) => {
    const data = [
        { date: '2024-01-01', value: 10 },
        { date: '2024-01-08', value: 15 },
        { date: '2024-01-15', value: 7 },
        { date: '2024-01-22', value: 20 },
        { date: '2024-01-29', value: 12 },
      ];
  const svgRef = useRef();
  const [formattedData, setFormattedData] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
       const parsedData = data.map(d => ({
        ...d,
        date: new Date(d.date) 
      }));
      setFormattedData(parsedData);
    }
  }, [data]);


  useEffect(() => {
    if (!formattedData || formattedData.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous content

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleTime()
      .domain(d3.extent(formattedData, d => d.date))
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(formattedData, d => d.value)])
      .range([innerHeight, 0]);

    const line = d3.line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.value));

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale));

    g.append("g")
      .call(d3.axisLeft(yScale));

    g.append("path")
      .datum(formattedData)
      .attr("fill", "none")
     .attr("stroke", "steelblue")
      .attr("stroke-width", 5)
      .attr("d", line);
  }, [formattedData]);

  return <svg ref={svgRef} width={width} height={height} />;
};

export default LineChart;