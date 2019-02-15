import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    state = {
        username: '',
        password: '',
        mode: 'Login', 
        data: {
            username: '',
            password: ''
        }
    };

    lbtnClickHandler = () => {
        if(this.state.mode == 'Login')
        { this.setState({
            ...this.state,
            mode: 'Signup'
        });
        } else {
            this.setState({
                ...this.state,
                mode: 'Login'
            });
        }

    }

    handleUsername = event => {
        console.log(event);
        const username = this.state.data.username;
        // username += 
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                username: event.target.value
            }
        })
        console.log(this.state.data);
    }

    render() {
        const login = (
            
                <div className="container" id="login_container">
                    <div id="linput_container">
                        <input 
                            className="login_input" 
                            placeholder="username"
                            value={this.state.username}
                            onChange={this.handleUsername}/> <br/>
                        <input 
                            className="login_input" 
                            type="password" 
                            placeholder="password"
                            value={this.state.password}/>
                    </div>
                    
                    <div id="lbtn_container">
                        <button 
                            value="this.state.mode" 
                            id="login_btn" 
                            >{this.state.mode}</button>
                        <p 
                            style={{display: 'inline'}}
                            onClick={this.lbtnClickHandler}>
                            <strong>{this.state.mode !== 'Login'? 'Login':'Signup'}</strong>
                        </p>
                    </div>
                    
                </div>
            
        )

        return login;
    }

}

export default Login;