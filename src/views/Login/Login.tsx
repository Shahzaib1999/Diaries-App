import { useState } from "react";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

import "./Login.css";

const Login: React.FunctionComponent<any> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-wrapper">
      <div className="card-wrapper">
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup row className="mt-3">
            <Label for="exampleText" md={7}>
              Not an user? <a href="/register"> Register</a>
            </Label>
            <Col md={5}>
              <button>Login</button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default Login;
