import React from "react";
import { Tab, Tabs, Table } from "react-bootstrap";

const UserOrder = () => {
  return (
    <div>
      <div className="user-order mt-3">
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Dashboard">
            <div className="p-2">
              <h2>Dashboard</h2>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Orders">
            <div className="p-2">
              <h3>Orders</h3>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Edit Profile">
            <div className="p-2">
              <h4>Edit Profile</h4>
              <form action="">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control mb-2"
                />
                <br />
                <button type="submit" className="btn btn-1" style={{background:"#C6834D",color:"#fff"}}>
                  Update Profile
                </button>
              </form>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default UserOrder;
