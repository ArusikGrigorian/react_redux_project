import React from "react";
import Wrapper from "../common/wrapper";
import Sidebar from "../menu/sidebar";
import Label from "../common/label";

const Contacts = () => {
  return (
    <Wrapper direction="row" justify="center" align="center">
      <Sidebar />
      <Wrapper justify="center" align="center" height="70vh" width="80%" margin="100px 0 0 20%">
        <Label fontSize="50px">Catland, Venus</Label>
      </Wrapper>
    </Wrapper>
  );
};

export default Contacts;
