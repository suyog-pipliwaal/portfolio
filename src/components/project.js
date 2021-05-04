import React from 'react';
export default class Projects extends React.Component {
	render() {
		return (
			<section class="resume-section" id="experience">
				<div class="resume-section-content">
					<h2 class="mb-5">Projects</h2>
					<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
						<div class="flex-grow-1">
							<h3 class="mb-0">Music Player for Android</h3>
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
				</div>
			</section>

		);
	}
}
