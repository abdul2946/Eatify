import React from 'react'
import OfferComponent from './OfferComponent';

export default function OfferSection() {
  return (
		<div className="my-8 grid md:grid-cols-3 gap-8">
			<OfferComponent
				title={"Sun's out, BOGO's out"}
				subTitle={"Rating 4/5"}
				Image={
					"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"
				}
			/>
			<OfferComponent
				title={"Sun's out, BOGO's out"}
				subTitle={"Rating 3/5"}
				Image={
					"https://images.unsplash.com/photo-1634818462211-aa45f43dafdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
				}
			/>
			<OfferComponent
				title={"Sun's out, BOGO's out"}
				subTitle={"Rating 4.5/5"}
				Image={
					"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
				}
			/>
		</div>
	);
}
