import React from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
const SocialLogin = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div>
      <ul>
        <li>
          <FacebookLogin
            appId="1088597931155576"
            textButton=""
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            icon="fa-facebook"
            size="small"
          />
        </li>
        <li>
          <GoogleLogin
            clientId="958981017585-gbr1s9r553lv0for38jdqu0o2e5moskq.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="btn btn-1"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FaGooglePlusG />
              </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </li>
        <li>
          <button className="btn btn-1">
            <FaLinkedinIn />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SocialLogin;
