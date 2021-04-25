import React from 'react';
export default class Experience extends React.Component {
	render() {
		return (
			<section class="resume-section" id="experience">
				<div class="resume-section-content">
					<h2 class="mb-5">Experience</h2>
					
					<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
						<div class="flex-grow-1">
							<h3 class="mb-0">Full stack developer</h3>
							<div class="subheading mb-3">Antares Tech</div>
							<p>
								Worked on cross platform mobile application which convert’s your phone into a mic. The app is available on android as well as apple play store by the name of Crowd Mics. 
								The main advantage of using this platform is audio delay which is less than 80 millisecond where as conventional system have delay of around 400 millisecond 
								in on same environment conditions. 
								This is possible because of our WebRTC module which is develop by our team. Majority of my work
								is towards user experience, adding new feature as required and bug fixing.
							</p>
						</div>
						<div class="flex-shrink-0"><span class="text-primary">May 2019 - Febaruy 2020</span></div>
					</div>

					<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
						<div class="flex-grow-1">
							<h3 class="mb-0">Internship</h3>
							<div class="subheading mb-3">Webhobs</div>
							<p>
								Worked on building a back-end in nodejs and as well as front-end in pure html and css. While working there I have gain experience in Angular-js as well as Node.js 
								and understanding various aspect of life cycle of an application, creating a interactive interface. 
								I have also have experience on working back-end service and enhancing the performance of the application and interacting with databases like Mysql and MongoDB.
							</p>
						</div>
						<div class="flex-shrink-0"><span class="text-primary">June 2017 - July 2017</span></div>
					</div>
				</div>
			</section>
			);
	}
}
