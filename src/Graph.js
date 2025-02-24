    // src/Graph.js
    import React, { useRef, useEffect, useState } from 'react';
    import * as d3 from 'd3';

    const Graph = ({ data }) => {
      const svgRef = useRef();
      const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
      const wrapperRef = useRef();

      useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
          if (entries.length > 0) {
            const newWidth = entries[0].contentRect.width;
            setDimensions({ width: newWidth, height: newWidth * 0.6 });
          }
        });

        if (wrapperRef.current) {
          resizeObserver.observe(wrapperRef.current);
        }

        return () => {
          if (wrapperRef.current) {
            resizeObserver.unobserve(wrapperRef.current);
          }
        };
      }, [wrapperRef]);

      useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const xScale = d3.scaleBand()
          .domain(data.map((val, index) => index))
          .range([0, dimensions.width])
          .padding(0.5);

        const yScale = d3.scaleLinear()
          .domain([0, d3.max(data)])
          .range([dimensions.height, 0]);

        const xAxis = d3.axisBottom(xScale);
        svg.append("g")
          .style("transform", `translate(0px, ${dimensions.height}px)`)
          .call(xAxis);

        const yAxis = d3.axisLeft(yScale);
        svg.append("g")
          .call(yAxis);

        svg.selectAll(".bar")
          .data(data)
          .enter()
          .append("rect")
          .attr("class", "bar")
          .attr("x", (value, index) => xScale(index))
          .attr("y", yScale)
          .attr("width", xScale.bandwidth())
          .attr("height", val => dimensions.height - yScale(val))
          .attr("fill", "steelblue");
      }, [data, dimensions]);

      return (
        
          <svg ref={svgRef} width={dimensions.width} height={dimensions.height}></svg>
        
      );
    };

    export default Graph;