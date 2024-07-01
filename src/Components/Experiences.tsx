import React from "react";
import "./Experiences.css";

export default function Experiences() {
	return (
		<div>
			<ol className="experience-list-container">
				<li className="experience-list-item">
					<div className="experience-item-grid">
						<div className="experience-item-style__container"></div>
						<header className="experience-item-header">2023 — Present</header>
						<div className="experience-description-container">
							<h3 className="experience-title">
								<div>
									<a className="experience-title-link"></a>
									<span className="experience-inner-style"></span>
									<span>
										Software Developer
										<br />
										<span className="experience-company-name">
											Decisions
											{/* Decisions<svg></svg> */}
										</span>
									</span>
								</div>
							</h3>
							<p className="experience-description-section">
								Build and maintain critical components used to construct
								Klaviyo’s frontend, across the whole product. Work closely with
								cross-functional teams, including developers, designers, and
								product managers, to implement and advocate for best practices
								in web accessibility.
							</p>
							<ul className="experience-skills-list__container">
								<li className="experience-skills-list">
									<div className="experience-skills-list__item">C#</div>
								</li>
								<li className="experience-skills-list">
									<div className="experience-skills-list__item">ReactJS</div>
								</li>
								<li className="experience-skills-list">
									<div className="experience-skills-list__item">JavaScript</div>
								</li>
								<li className="experience-skills-list">
									<div className="experience-skills-list__item">C#</div>
								</li>
								<li className="experience-skills-list">
									<div className="experience-skills-list__item">ReactJS</div>
								</li>
								<li className="experience-skills-list">
									<div className="experience-skills-list__item">JavaScript</div>
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ol>
			<div className="view-resume-container">
				<a className="view-resume-link">
					<span className="view-resume-textblock">
						View Full
						<span>Resume</span>
					</span>
				</a>
			</div>
		</div>
	);
}
