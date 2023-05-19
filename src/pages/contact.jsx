import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {Heading,} from "@chakra-ui/react";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		document.title = `Contact | ${INFO.main.title}`;
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					

					<div className="contact-container">
					<Heading className="skills-heading">
 
 <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
   <span className="skills-heading">Informations</span>
 </Heading>
						
					</div>

					<div className="contact-container">
			
						
						



						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
