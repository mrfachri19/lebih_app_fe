import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginDriver from "../views/auth/LoginDriver.js";
// components
import RegisterDriver from "../views/auth/RegisterDriver.js";

export default function Auth() {
  const Register = lazy(() => import('../views/auth/Register.js'));
  const Login = lazy(() => import('../views/auth/Login.js'));

  const renderLoader = () => <p>Loading</p>;

  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full py-20 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-white bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("../assets/img/presence-doodle.webp").default + ")",
            }}
          ></div>
          <Suspense fallback={renderLoader()}>
            <Switch>
              <Route path="/auth/login" exact component={Login} />
              <Route path="/auth/login-driver" exact component={LoginDriver} />
              <Route path="/auth/register" exact component={Register} />
              <Route path="/auth/register-driver" exact component={RegisterDriver} />
              <Redirect from="/auth" to="/auth/login" />
            </Switch>
          </Suspense>
        </section>
      </main>
    </>
  );
}
