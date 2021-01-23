import { useState } from "react";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

import "./Register.css";

const Register: React.FunctionComponent<any> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-wrapper">
      <div className="card-wrapper">
        <Form>
        <FormGroup>
            <Label for="email">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
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
            <Label for="exampleText" md={8}>
              Already a member? <a href="/login"> Login</a>
            </Label>
            <Col md={4}>
              <button>Register</button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default Register;
