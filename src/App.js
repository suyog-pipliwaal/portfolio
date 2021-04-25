import React from 'react';
import profileImage from  './assets/img/profile.jpeg';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import About from './components/about';
import Skills from './components/skills';
import Awards from './components/awards';
import Education from './components/education';
import Experience from './components/experience';
import Intersets from './components/interset';

class App extends React.Component {
	render () {
		return (
			<HashRouter>
			<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
				<a class="navbar-brand js-scroll-trigger" href="#page-top">
					<span class="d-block d-lg-none">Suyog Pipliwal</span>
					<span class="d-none d-lg-block">
						<img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={profileImage} alt="profile"/>
			   </span>
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav">
						<li class="nav-item"><NavLink to="/about"><p class="nav-link">About</p></NavLink></li>
						<li class="nav-item"><NavLink to="/experience"><p class="nav-link">Experience</p> </NavLink></li>
						<li class="nav-item"><NavLink to="/education"><p class="nav-link">Education</p> </NavLink></li>
						<li class="nav-item"><NavLink to="/skills"><p class="nav-link">Skills</p> </NavLink></li>
						<li class="nav-item"><NavLink to="/intersets"><p class="nav-link">Interests</p></NavLink></li>
					</ul>
				</div>
			</nav>
			<div class="container-fluid p-0">
				<Route exact path="/" component={About}/>
				<Route exact path="/about" component={About}/>
				<Route path="/education" component={Education}/>
				<Route path="/experience" component={Experience}/>	
				<Route path="/skills" component={Skills}/>
				<Route path="/intersets" component={Intersets}/>	
			</div>
		</HashRouter>
		);
	}
}

export default App;
