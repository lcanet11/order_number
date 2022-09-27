import React, {Component} from 'react';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            cart: 0
        }
    }

    sumar = () => {
        this.setState({
            cart: this.state.cart += 1
        })
    }

    restar = () => {
        this.setState({
            cart: this.state.cart -= 1
        })
    }




    render(){
        return(  
            <div>
                <button onClick={this.sumar}>+</button><br />
                <button onClick={this.restar}>-</button><br />
                <span>{this.state.cart}</span>
            </div>
        )
    }
}

export default Home; 