// import PropTypes from 'prop-types';
import { Component } from 'react';

import './StepBar.style';

export class StepBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : this.props.currentTitle,
        }
        this.item = []
    }

    componentDidMount(){
        this.setState({
            title: this.props.currentTitle
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentTitle !== prevProps.currentTitle) {
            this.setState({
                title: this.props.currentTitle
            })
        }
      }

    render() {
        const obj = this.props.ObjItem
        const result = Object.entries(obj)
        const currentItem = this.state.title.value
        const getmainword = currentItem.replace("step",'').replace(" ", '').toUpperCase()
        return (
            <div block="StepBar">
                {result.map((data, i )=> {
                    return(
                        <>
                        <div className={(data[0].replace('_STEP', "") === getmainword)? "stepper-item completed" : "stepper-item active"  } key={i}>
                            <div className="step-counter">{i +1}</div>
                            <div className="step-name">{data[0].replace('_STEP', "")}</div>
                        </div>
                        </>
                    )
                })}
                </div>
            )

    }
}

export default StepBar;
