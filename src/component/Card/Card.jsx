import React from 'react';
import image from '../../assets/img/shakilcircular-01.png';
import { ClockIcon, EtheriumIcon, ViewIcon } from '../../assets/svg';
import { Card as StyledCard, Flex } from './StyledCard';

function Card() {
    return (
        <StyledCard>
            <div className="card__img">
                <div className="card__visible">
                    <div className="card__visible-icon">
                        <ViewIcon/>
                    </div>
                </div>
            </div>
            <div className="card__text-content">
                <h3>Equilibrium #3429</h3>
                <p>Our Equilibrium collection promotes balance and calm.</p>
            </div>
            <Flex>
                <Flex>
                    <EtheriumIcon/>
                    <span className="card__info-box-left">0.041ETH</span>
                </Flex>
                <Flex>
                    <ClockIcon/>    
                    <span className="card__info-box-right">3 days left</span>
                </Flex>
            </Flex>
            <div className="card__footer">
            <Flex>
                <div className="avatar">
                    <img src={image} alt="avatar" />
                </div>
                <p>
                    Creating of <span> &nbsp;Shakil Ansary</span>
                </p>
            </Flex>
            </div>
        </StyledCard>
    )
}

export default Card
