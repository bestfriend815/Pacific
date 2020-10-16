import React from 'react';
import { connect } from 'react-redux';
import useForm from '../../use-form-react';

import {signUserIn} from '../../actions';
import CenterCard363 from '../centerCard363';

const Signin = (props) => {
    const options = {
        initialValues: {
            'email': '',
            'password': ''
        },
        callback: () => {
            console.log('works!', inputs)
            props.signUserIn(inputs);
        },
        debug: false
    }
    const { onSubmit, onChange, inputs, dirty, submitting } = useForm('AdvanceForm', options);
    return (
            <CenterCard363>
                <div className="ml-auto mr-auto col-md-6 col-lg-4">
                    <form className="form" onSubmit={onSubmit}>
                        <div className="card-login card-white card" style={{borderRadius:"0.4285rem", paddingBottom:"0.7rem"}}>
                            <div className="card-header" style={{padding:"0 0 100px", overflow:"hidden",border:"o"}}>
                                <img src={require("assets/img/auth.png")}  alt="..." style={{position:"absolute",left:"0", width:"70%",borderRadius:"0.2232rem"}} />
                                <h1 className="card-title" style={{position:"relative",fontSize:"5em",fontWeight:"900",textTransform:"lowercase",marginLeft:"-5px",zIndex:"1",color:"white"}}>Log in</h1>
                            </div>
                            <div className="card-body">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="tim-icons icon-email-85"></i>
                                        </span>
                                    </div>
                                    <input name="email" placeholder="Email" type="email" className="form-control" onChange={onChange} value={inputs.email} />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="tim-icons icon-email-85"></i>
                                        </span>
                                    </div>
                                    <input name="password" onChange={onChange} value={inputs.password} placeholder="Password" type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="card-footer">
                                    <button type="submit" className="btn btn-lg btn-light btn-block" disabled={!dirty || submitting}>
                                        Get Started
                                    </button>
                                <div className="pull-left">
                                    <h6><a className="link footer-link" href="">Create Account</a></h6>
                                </div>
                                <div className="pull-right">
                                    <h6><a className="link footer-link" href="">Need Help</a></h6>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </CenterCard363>
    );
}

export default connect(null, {signUserIn})(Signin);