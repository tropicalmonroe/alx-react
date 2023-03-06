import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <React.Fragment>
      <div className={css(loginstyles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className={loginStyles.inputs} />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" className={loginStyles.inputs} />
	  <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

const loginstyles = StyleSheet.create({
        appBody: {
            padding: '36px 24px',
	    @media (max-width: 900px): {
	    display: 'flex',
            flexDirection: 'column'
	    }
	},

	 inputs: {
             margin: '0 16px 0 8px'
	 }
})


export default Login;
