import React from 'react';
export default class Education extends React.Component {
	render() {
		return (
			<section class="resume-section" id="education">
				<div class="resume-section-content">
					<h2 class="mb-5">Education</h2>
					
					<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
						<div class="flex-grow-1">
							<h3 class="mb-0">INDIAN INSTITUTE OF INFORMATION TECHNOLOGY GUWAHATI</h3>
							<div class="subheading mb-3">Bachelor of Technology</div>
							<div>Computer Science and Engineering.</div>
							<p>CPI: 6.69/10</p>
						</div>
						<div class="flex-shrink-0"><span class="text-primary">June 2015 - May 2019</span></div>
					</div>
					
					<div class="d-flex flex-column flex-md-row justify-content-between">
						<div class="flex-grow-1">
							<h3 class="mb-0">CAMBRIDGE COURT HIGH SCHOOL</h3>
							<div class="subheading mb-3">High School</div>
							<div>High school in PCM from CBSE</div>
							<p>Score: 80%</p>
						</div>
						<div class="flex-shrink-0"><span class="text-primary">March 2014</span></div>
					</div>
				</div>
			
			</section>
		);
	}
}
