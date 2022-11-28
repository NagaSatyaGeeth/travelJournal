import React from "react";
import marker from "/src/assets/Fill 219.png";

var card = (props) => {
	return (
		<div className="flex ml-12 mr-12 card-wrapper justify-center items-center mt-24">
			<div className="image">
				<img className="h-60 w-44" src={`${props.info.imageUrl}`}></img>
			</div>
			<div className="card-info flex-col ml-6 w-96">
				<div className="location-wrapper flex items-baseline">
					<img className="w-3 mr-2" src={marker}></img>
					<div className="destination-name text-base mr-4">
						{props.info.location}
					</div>
					<a
						href={props.info.googleMapsUrl}
						className="google-maps text-sm text-secondaryText underline"
					>
						View on Google maps
					</a>
				</div>
				<div className="destination-name mt-2 mb-4 font-bold text-2xl">
					{props.info.title}
				</div>
				<div className="travel-date font-bold mb-2">
					{props.info.startDate} - {props.info.endDate}
				</div>
				<div className="description font-light">{props.info.description}</div>
			</div>
		</div>
	);
};

export default card;
