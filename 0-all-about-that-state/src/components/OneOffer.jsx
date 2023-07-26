import React from "react"

function OneOffer(props) {
	const offer = props.offer
	return (
		<div key={offer.objectID}>
			<h2>{offer.organization.name}</h2>
			<p>Employees count: {offer.organization.nb_employees}</p>
			{offer.salary_minimum && offer.salary_maximum && (
				<ul>
					<li>Minmum Salary: {offer.salary_minimum}</li>
					<li>Maximum Salary: {offer.salary_maximum}</li>
				</ul>
			)}
			<img src={offer.organization.logo.url}></img>
		</div>
	)
}

export default OneOffer
