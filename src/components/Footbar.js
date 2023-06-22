import React from 'react'
import "../css/footbar.css"

export default function Footbar() {
    return (
        <>
            <div id="footer" role="navigation" className="list">
                <span>SpaceX © 2023</span>
                <a href="https://twitter.com/spacex" aria-label="SpaceX's Twitter Account" rel="noreferrer noopener" target="_blank" className="social">TWITTER</a>
                <a href="https://www.youtube.com/spacex" aria-label="SpaceX's YouTube Account" rel="noreferrer noopener" target="_blank" className="social">YOUTUBE</a>
                <a href="https://www.instagram.com/spacex/" aria-label="SpaceX's Instagram Account" rel="noreferrer noopener" target="_blank" className="social">INSTAGRAM</a>
                <a href="https://www.flickr.com/photos/spacex" aria-label="SpaceX'S Flickr Account" rel="noreferrer noopener" target="_blank" className="social">FLICKR</a>
                <a href="https://www.linkedin.com/company/spacex" aria-label="SpaceX's LinkedIn Account" rel="noreferrer noopener" target="_blank" className="social">LINKEDIN</a>
                <a href="/media/privacy_policy_spacex.pdf" aria-label="SpaceX's Privacy Policy" target="_blank" className="social">PRIVACY POLICY</a>
                <a href="/supplier/" aria-label="Information for SpaceX suppliers" className="social">SUPPLIERS</a>
            </div>
        </>
    )
}
