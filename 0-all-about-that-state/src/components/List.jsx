import React, { useState } from "react"
import jsonData from "./../assets/job_offers_apprenticeship.json"
import OneOffer from "./OneOffer"
import { copyArray, sortOrganizationByName } from "../utils/helpers"

const firstThree = jsonData.slice(0, 3)

function List() {
	const [offers, setOffers] = useState(firstThree)

	function handleAddOffer() {
		const randomOffer = jsonData[Math.floor(Math.random() * jsonData.length)]
		// const copy = [...offers]
		// copy.push(randomOffer)
		// setOffers(copy)

		setOffers([...offers, randomOffer])
	}

	function handleSortByName() {
		const copy = copyArray(offers)
		// const copy = [...offers]
		// copy.sort((a, b) => a.organization.name.localeCompare(b.organization.name))
		copy.sort(sortOrganizationByName)

		setOffers(copy)
	}

	function handleSortByEmployees() {
		const copy = [...offers]
		copy.sort(
			(a, b) => a.organization.nb_employees - b.organization.nb_employees
		)
		setOffers(copy)
	}

	function handleDelete(id) {
		const newOfferState = offers.filter((offer) => offer.objectID !== id)
		setOffers(newOfferState)
	}

	return (
		<div>
			<div className="actions">
				<button onClick={handleAddOffer}>Add a random Offer</button>
				<button onClick={handleSortByName}>Sort by Name</button>
				<button onClick={handleSortByEmployees}>Sort by employee count</button>
			</div>
			<div className="container">
				{offers.map((offerObject) => {
					return (
						<div key={offerObject.objectID}>
							<h2>{offerObject.organization.name}</h2>
							<p>Employees count: {offerObject.organization.nb_employees}</p>
							{offerObject.salary_minimum && offerObject.salary_maximum && (
								<ul>
									<li>Minmum Salary: {offerObject.salary_minimum}</li>
									<li>Maximum Salary: {offerObject.salary_maximum}</li>
								</ul>
							)}
							<img src={offerObject.organization.logo.url}></img>
							<div>
								<button onClick={() => handleDelete(offerObject.objectID)}>
									Delete
								</button>
							</div>
						</div>
					)
					// const {name, nb_employees} = offer.organization
					// return <OneOffer key={offerObject.objectID} offer={offerObject} />
				})}
			</div>
		</div>
	)
}

export default List
