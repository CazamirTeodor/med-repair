import React from 'react';
import CloseIcon from '../assets/images/close-icon.png';
import ClinicIcon from '../assets/images/clinic.jpeg';

class ClinicPopup extends React.Component {
    render() {
        return (
            <div className="clinic-popup">
                <div className="clinic-popup-content">
                    <div className="close-button" onClick={this.props.onClick}>
                        <img src={CloseIcon} alt="close icon" />
                    </div>
                    <div className="clinic-card">
                        <img src={ClinicIcon} alt="clinic-icon"/>
                        <div className="clinic-details">
                            <p className="name">Clinica Dental Med</p>
                            <p className="address">
                                str. Aparatorii Patriei, 11
                            </p>    
                            <p className="phone">
                                075-123-456
                            </p>
                            <p className="email"></p>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}

export default ClinicPopup;
