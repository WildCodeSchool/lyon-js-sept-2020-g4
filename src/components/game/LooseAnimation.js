import React from 'react'
import './LooseAnimation.css'


const LooseAnimation = () => {
    return(
            <div className="animation-loose">
                <div className="div-rocket-miss">
                    {/* <div className="rocket-miss"></div> */}
                    <img style={{width:'50px', height:'50px'}} className="rocket-miss" src="../rocketLoose.png" />
                </div>
                <div className="div-planet-loose">
                    {/* <div className="planet-loose"></div> */}
                    <img style={{width:'70px', height:'70px'}} className="planet-loose" src='../terreTest.png' />
                </div>
            </div>
    )
}

export default LooseAnimation;