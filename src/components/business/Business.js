import "./business.css";
import React from 'react';
import Fade from 'react-reveal/Fade';


class Business extends React.Component {

    constructor(props) {
        super(props);
        this.state = { show: false };
        this.startClick = this.startClick.bind(this);
      }
    
    startClick() {
        this.setState({ show: !this.state.show });
    }

    render() {

        return (
            <div className="business-page">
                <Fade bottom>
                    <div className="business-page__text-group">
                        <h2 className="business-page__heading">Start your business with us</h2>
                        <div className="business__paragraph">
                            <p className="business-page__paragraph1">If you have quality productions and aim to grow up your business with us, 
                            then we can offer you a partnership</p>
                        </div>
                        <div className="business__paragraph">
                            <p className="paragraph business-page__paragraph2">We will help you to grow up your business and sale your productions on store. 
                            We will get 5% of your income.</p>
                        </div>
                        <button className="button business-page__start-button"  onClick={this.startClick}>Start you business</button>
                    </div>
                </Fade>
                
                
                <Fade bottom when={this.state.show}>
                    <div className="business-page__apply-form">
                        <p className="business-page__apply-label">Apply form</p>
                        <form>
                            <div className="business-page__form-section">
                                <label className="form-text business-page__company-label">Company</label><br/>
                                <input className="form-text form-input business-page__company-input"/><br/>
                            </div>
            
                            <div className="business-page__form-section">
                                <label className="form-text business-page__company-label">Email</label><br/>
                                <input className="form-text form-input business-page__company-input"/><br/>
                            </div>   
            
                            <div className="business-page__form-section">

                                <label className="form-text business-page__company-label">Phone</label><br/>
                                <input className="form-text form-input business-page__company-input"/>
                            </div>            
            
                            <div className="business-page__apply-form-buttons">
                                <button className="button business-page__cancel-button">Cancel</button>
                                <button className="button business-page__apply-button">Apply</button>
                            </div>
                        </form>

                    </div>
                </Fade>
                
    
            </div>
        );
    }
    
}
 
export default Business;