import React, {useState} from 'react';
import {connect} from 'react-redux';
import {signUserUp} from '../../actions';
import CenterCard363 from '../centerCard363';
import useForm from '../../use-form-react';

const Signup = (props) => {
    const [errMsg, setErrorMsg] = useState('');
    const options = {
        initialValues: {
            'name' : '',
            'email': '',
            'password': '',
            'password2': ''
        },
        callback: () => {
            if (inputs.password === inputs.password2) {
                console.log(inputs);
                props.signUserUp(inputs);
            }else{
                setErrorMsg('password does not matched');
            }
        },
        debug: false
    }
    const { onSubmit, onChange, inputs, dirty, submitting } = useForm('AdvanceForm', options);
    return (
        <CenterCard363>
            <div className="row">
                <div className="ml-auto col-md-5">
                    <div className="info-area info-horizontal mt-5">
                        <div className="icon icon-warnig">
                            <i className="tim-icons icon-wifi"></i>
                        </div>
                        <div className="description">
                            <h3 className="info-title">Marketing</h3>
                            <p className="description">
                                We've created the marketing campaign of the website. It was a very interesting collaboration.
                            </p>
                        </div>
                    </div>
                    <div className="info-area info-horizontal">
                        <div className="icon icon-primary">
                            <i className="tim-icons icon-triangle-right-17"></i>
                        </div>
                        <div className="description">
                            <h3 className="info-title">Fully Coded in HTML5</h3>
                            <p className="description">
                                We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.
                            </p>
                        </div>
                    </div>
                    <div className="info-area info-horizontal mt-5">
                        <div className="icon icon-info">
                            <i className="tim-icons icon-trophy"></i>
                        </div>
                        <div className="description">
                            <h3 className="info-title">Built Audience</h3>
                            <p className="description">
                                There is also a Fully Customizable CMS Admin Dashboard for this product.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mr-auto col-md-7">
                    <div className="card-register card-white card">
                        <div className="card-header" style={{padding:"0 0 100px", overflow:"hidden",border:"o"}}>
                            <img style={{position:"absolute",left:"0",width:"70%",borderRadius:"0.2232rem"}} src={require("assets/img/auth.png")}  alt="..." className="card-img"/>
                            <h4 className="card-title" style={{position:"relative",fontSize:"5em",fontWeight:"900",textTransform:"lowercase",marginLeft:"-5px",zIndex:"1",color:"white"}}>Register</h4>
                        </div>
                        <form className="form" onSubmit={onSubmit}>
                        <div className="card-body">
                            
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="tim-icons icon-single-05"></i>
                                        </span>
                                    </div>
                                    <input name="name" placeholder="Name" type="text" className="form-control" onChange={onChange} value={inputs.name} />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="tim-icons icon-email-85"></i>
                                        </span>
                                    </div>
                                    <input name="email" placeholder="Email" type="text" className="form-control" onChange={onChange} value={inputs.email} />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="tim-icons icon-lock-circle"></i>
                                        </span>
                                    </div>
                                    <input name="password" placeholder="Password" type="password" className="form-control" onChange={onChange} value={inputs.password}/>
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="tim-icons icon-lock-circle"></i>
                                        </span>
                                    </div>
                                    <input name="password2" placeholder="Password" type="password" className="form-control" onChange={onChange} value={inputs.password2}/>
                                </div>
                                <div className="text-left form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input"/>
                                        <span className="form-check-sign"></span>I agree to the<a href="">terms and conditions</a>"."
                                    </label>
                                </div>
                            
                        </div>
                        {errMsg && <div className="alert alert-warning">
                            <strong>Oops!
                            </strong> {errMsg}
                        </div>}
                        <div className="card-footer">
                            <button type="submit" className="btn btn-lg btn-light btn-block" disabled={!dirty || submitting}>
                                Get Started
                            </button>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </CenterCard363>
    );
}

export default connect(null, {signUserUp})(Signup);