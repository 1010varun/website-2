import React from "react";
import PortfolioCard from "./PortfolioCard";


const Portfolio = () => {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <PortfolioCard imageSource="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png" number= "#portfolioModal1"/>
                    <PortfolioCard imageSource="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png" number= "#portfolioModal2"/>
                    <PortfolioCard imageSource="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png" number= "#portfolioModal3"/>
                    <PortfolioCard imageSource="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png" number= "#portfolioModal4"/>
                    <PortfolioCard imageSource="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png" number= "#portfolioModal5"/>
                    <PortfolioCard imageSource="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png" number= "#portfolioModal6"/>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;