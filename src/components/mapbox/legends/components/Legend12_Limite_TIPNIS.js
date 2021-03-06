import React, { Component } from 'react';
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";

class Legend12_Limite_TIPNIS extends Component {

    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            arrowClass: 'fa fa-caret-right'
        };
    }
    componentDidMount() {
        this.setState({collapse:this.props.defaultOpened});
        if (this.props.defaultOpened == true) { 
            this.setState({arrowClass: 'fa fa-caret-down'})
        } else {
            this.setState({arrowClass: 'fa fa-caret-right'})
        }
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
        if (this.state.collapse) {
            this.setState({arrowClass: 'fa fa-caret-right'})
        } else { 
            this.setState({arrowClass: 'fa fa-caret-down'})
        }
    }

    _onChangeHandler = (name,event) => {        
        this.props._onChangeHandler(name,this.props.parentScope,event.target.checked)
    }

    render () {
        return (
            <div className='mapbox_control-panel_subtitle' style={{paddingTop:'3px',paddingLeft:'20px'}}>
                <input type="checkbox" className="mapbox_custom-checkbox-tipnis" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'TIPNIS_TI-limite_LEGENDA')} />
                <label className="mapbox_custom-checkbox-label" style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'.4rem'}} onClick={this.toggle}>
                    <FormattedMessage id="legend2.item10" defaultMessage="national">
                        {(txt) => (txt)}
                    </FormattedMessage>
                </label>
            </div>
        )
    }
}

export default Legend12_Limite_TIPNIS;