import React from 'react';
export default class Skills extends React.Component {
	render() {
		return (
			<section class="resume-section" id="skills">
				<div class="resume-section-content">
					<h2 class="mb-5">Skills</h2>
					<div class="subheading mb-3">Programming Languages & Tools</div>
					<ul class="list-inline dev-icons">
						<li class="list-inline-item"><i class="fab fa-react"></i></li>
						<li class="list-inline-item"><i class="fab fa-node-js"></i></li>
						<li class="list-inline-item"><i class="fab fa-npm"></i></li>
						<li class="list-inline-item"><i class="fab fa-python"></i></li>
						<li class="list-inline-item"><i class="fab fa-git"></i></li>
						<li class="list-inline-item"><i class="fab fa-node"></i></li>
					</ul>
					<div class="subheading mb-3">Workflow</div>
					<ul class="fa-ul mb-0">
						<li>
							<span class="fa-li"><i class="fas fa-check"></i></span>
							Mobile-First, Responsive Design
						</li>
						<li>
							<span class="fa-li"><i class="fas fa-check"></i></span>
							Cross Browser Testing & Debugging
						</li>
						<li>
							<span class="fa-li"><i class="fas fa-check"></i></span>
							Cross Functional Teams
						</li>
						<li>
							<span class="fa-li"><i class="fas fa-check"></i></span>
							Agile Development & Scrum
						</li>
					</ul>
				</div>
			</section>
		);
	}
}
