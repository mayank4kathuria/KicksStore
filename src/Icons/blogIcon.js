import React from "react";

export default function BlogsIcon ({ height = '40px', width = '40px', color="#000" }) {
	return (
		<svg fill={color} width={width} height={width} viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">

			<title />

			<g>

				<path d="M12,72A12,12,0,1,0,24,84,12.0119,12.0119,0,0,0,12,72Z" />

				<path d="M12,36a6,6,0,0,0,0,12A36.0393,36.0393,0,0,1,48,84a6,6,0,0,0,12,0A48.0512,48.0512,0,0,0,12,36Z" />

				<path d="M12,0a6,6,0,0,0,0,12A72.0788,72.0788,0,0,1,84,84a6,6,0,0,0,12,0A84.0981,84.0981,0,0,0,12,0Z" />

			</g>

		</svg>
	)
}