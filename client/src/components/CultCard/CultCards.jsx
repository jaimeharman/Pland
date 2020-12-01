import { render } from '@testing-library/react';
import React, {Component} from 'react';
import CultCard from '../../components/CultCard/CultCard';
import enviro from '../../../src/images/enviro.jpg';
import zengarden from '../../../src/images/zengarden.jpg';
import teamwork from '../../../src/images/teamwork.jpg';

class CultCards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row justify-content-center">
                    <CultCard imgsrc={enviro} title="Environmental Factors Affecting Plants" text="Either directly or indirectly, most plant problems are caused by environmental stress. Learn about important environmental factors that could be impacting your plant's health"  link="https://extension.oregonstate.edu/gardening/techniques/environmental-factors-affecting-plant-growth"/>
                    

                    <CultCard imgsrc={zengarden} title="15 Sustainable Gardening Ideas" text="Sustainable Gardening means gardening in a smart and eco-friendly way. Discover new ways to experiment with your garden." />
                   
                    
                    <CultCard imgsrc={teamwork} title="How to Pick the Right Plants" text="Picking the right plants for you and your garden can be easy and stress-free. Check out these tips to make your new green space perfect!" link="https://www.fromhousetohome.com/garden/pick-the-right-plants"/>
                    

                    </div>
                </div>
        );
    }
}    


export default CultCards;
