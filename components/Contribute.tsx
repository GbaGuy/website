import React from 'react'
import MotionFadeInOnScroll from './MotionFadeInOnScroll'
import { IoStar } from 'react-icons/io5'

function Contribute() {
    return (
        <section id="contribute">
            <div className="container">
                <div className="contribute-wrap">
                    <span className="section-label">Community</span>
                    <h2>Help build the future<br />of free animation</h2>
                    <p>Flare is brand new and needs developers, designers, and testers. Whether you&apos;re a C++ veteran or just love animation, there&apos;s a place for you here.</p>
                    <div className="contrib-steps">
                        <MotionFadeInOnScroll className="step">
                            <div className="step-num">1</div>
                            <div className="step-text">
                                <h4>Fork the Repo</h4>
                                <p>Star and fork on GitHub to get started with the codebase.</p>
                            </div>
                        </MotionFadeInOnScroll>
                        <MotionFadeInOnScroll className="step">
                            <div className="step-num">2</div>
                            <div className="step-text">
                                <h4>Pick an Issue</h4>
                                <p>Browse open issues or suggest new features and improvements.</p>
                            </div>
                        </MotionFadeInOnScroll>
                        <MotionFadeInOnScroll className="step">
                            <div className="step-num">3</div>
                            <div className="step-text">
                                <h4>Submit a PR</h4>
                                <p>Open a pull request. Respect the OpenToonz BSD licensing terms.</p>
                            </div>
                        </MotionFadeInOnScroll>
                    </div>
                    <div className="btn-group">
                        <a href="https://github.com/Flare-Animate/Flare" target="_blank" className="btn btn-primary">Star on GitHub <IoStar /></a>
                        <a href="https://github.com/Flare-Animate/Flare/issues" target="_blank" className="btn btn-ghost">Browse Issues</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contribute