import React, {Component} from 'react';
class Rectangle5 extends Component {
    constructor(props) {
        super(props)
        this.state = { temp: 'cold' };
    }
    render() {
        return (
            <div className='Rectangle-5'>
                {this.props.children}
            </div>
        );
    }   
}

export default Rectangle5;