import React, { useState } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Modal from "../component/Modal";
import MyDropzone from "../component/MyDropzone";
import SearchPost from "../component/SearchPost";
import UploadBtn from "../component/UploadBtn";
import ReviewBtn from "../component/ReviewBtn";
import Header from "../component/Header";

const QnA = () => {
  return <Header />;
};

export default QnA;
