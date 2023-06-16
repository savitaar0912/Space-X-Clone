/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'

export default function Navbar() {
    return (
        <div id="header" role="navigation" class="section" data-limit=".15">
            <div class="header-bg"></div>
            <div class="header-inner">
                <a href="/" id="logo" aria-label="Link to go to the homepage">
                    <img src="" alt="" />
                </a>
                <div id="navigation">
                    <ul class="nav-links">
                        <li class="nav-item"><a href="/vehicles/falcon-9/" aria-label="Learn about the Falcon 9 vehicle">Falcon 9</a></li>
                        <li class="nav-item"><a href="/vehicles/falcon-heavy/" aria-label="Learn about the Falcon Heavy vehicle">Falcon Heavy</a></li>
                        <li class="nav-item"><a href="/vehicles/dragon/" aria-label="Learn about the Dragon vehicle">Dragon</a></li>
                        <li class="nav-item"><a href="/vehicles/starship/" aria-label="Learn about the Starship vehicle">Starship</a></li>
                        <li class="nav-item"><a href="/human-spaceflight/" aria-label="Learn about Human Spaceflight">Human Spaceflight</a></li>
                        <li class="nav-item"><a href="/rideshare/" aria-label="Learn about the Rideshare program">Rideshare</a></li>
                        <li class="nav-item"><a href="/starshield/" aria-label="Learn about the Starshield program">Starshield</a></li>
                        <li class="nav-item"><a href="https://www.starlink.com" aria-label="Learn about Starlink internet" target="_">Starlink</a></li>
                    </ul>
                </div>
            </div>

            <div id="navigation-right">
                <ul class="nav-links">
                    <li class="nav-item"><a href="https://shop.spacex.com/" rel="noopener noreferrer" aria-label="Go to the SpaceX shop" target="_blank">Shop</a></li>
                </ul>
            </div>

            <div id="menu-close" style={{opacity: "0" , visibility: "hidden"}} ></div>
            <div id="menu" style={{width: "0px"}}>
                <div id="menu-background" style={{translate: "none" , rotate: "none" , scale: "none" , transform: "translate(0px, 0px)"}}></div>
                <div id="menu-navigation" style={{opacity: "0" , visibility: "hidden"}}>
                    <ul class="nav-links">
                        <li class="nav-item primary" style={{opacity: "0" , visibility: "hidden"}}><a href="/vehicles/falcon-9/" aria-label="Learn about the Falcon 9 vehicle">Falcon 9</a></li>
                        <li class="nav-item primary" style={{opacity: "0" , visibility: "hidden"}}><a href="/vehicles/falcon-heavy/" aria-label="Learn about the Falcon Heavy vehicle">Falcon Heavy</a></li>
                        <li class="nav-item primary" style={{opacity: "0" , visibility: "hidden"}}><a href="/vehicles/dragon/" aria-label="Learn about the Dragon vehicle">Dragon</a></li>
                        <li class="nav-item primary" style={{opacity: "0" , visibility: "hidden"}}><a href="/vehicles/starship/" aria-label="Learn about the Starship vehicle">Starship</a></li>
                        <li class="nav-item primary" style={{opacity: "0" , visibility: "hidden"}}><a href="/human-spaceflight/" aria-label="Learn about Human Spaceflight">Human Spaceflight</a></li>
                        <li class="nav-item primary" style={{opacity: "0" , visibility: "hidden"}}><a href="/rideshare/" aria-label="Learn about the Rideshare program">Rideshare</a></li>
                        <li class="nav-item primary" style={{opacity: "0" , visibility: "hidden"}}><a href="/starshield/" aria-label="Learn about the Starshield program">Starshield</a></li>
                        <li class="nav-item primary" style={{opacity: "0" , visibility: "hidden"}}><a href="https://www.starlink.com" aria-label="Learn about Starlink internet" target="_">Starlink</a></li>
                        <li class="nav-item secondary" style={{translate: "none" , rotate: "none" , scale: "none" , opacity: "0" , visibility: "hidden" , transform: "translate(0px, 0px)"}}><a href="/mission/" aria-label="Learn about SpaceX's mission">Mission</a></li>
                        <li class="nav-item secondary" style={{translate: "none" , rotate: "none" , scale: "none" , opacity: "0" , visibility: "hidden" , transform: "translate(0px, 0px)"}}><a href="/launches/" aria-label="Learn about SpaceX's launches">Launches</a></li>
                        <li class="nav-item secondary" style={{translate: "none" , rotate: "none" , scale: "none" , opacity: "0" , visibility: "hidden" , transform: "translate(0px, 0px)"}}><a href="/careers/" aria-label="Learn about SpaceX careers">Careers</a></li>
                        <li class="nav-item secondary" style={{translate: "none" , rotate: "none" , scale: "none" , opacity: "0" , visibility: "hidden" , transform: "translate(0px, 0px)"}}><a href="/updates/" aria-label="Learn about the latest updates">Updates</a></li>
                        <li class="nav-item secondary" style={{translate: "none", rotate: "none", scale: "none", opacity: "0" ,visibility: "hidden" , transform: "translate(0px, 0px)"}}><a href="https://shop.spacex.com/" rel="noopener noreferrer" aria-label="Go to the SpaceX shop" target="_blank">Shop</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
