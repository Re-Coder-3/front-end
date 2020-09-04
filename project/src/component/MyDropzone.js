import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { device } from "../styles/responsive";

const uploadFileMutation = gql`
  mutation UploadFile($file: Upload!) {
    singleUpload(file: $file)
  }
`;

const DropBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  @media ${device.tablet} {
    height: none;
    min-width: 120px;
    &:after {
      padding-bottom: 100%;
    }
  }
  @media ${device.mobileS} {
    height: none;
    min-width: 90px;
    &:after {
      padding-bottom: 100%;
    }
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.image ? `url(${props.image}) center center` : "white"};
  background-size: cover;
`;

export default () => {
  const [uploadFile] = useMutation(uploadFileMutation);
  const [droppedImage, setDroppedImage] = useState();
  const ADD_URL = gql`
    mutation addUrl($url: String) {
      addUrl(url: $url) @client
    }
  `;
  const [addUrlMutation] = useMutation(ADD_URL);
  const onDrop = useCallback(
    async ([file]) => {
      const {
        data: { singleUpload: url },
      } = await uploadFile({ variables: { file } });
      setDroppedImage(url);
      addUrlMutation({ variables: { url } });
    },
    [uploadFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <DropBox {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {isDragActive ? <Box>+</Box> : <Image image={droppedImage}></Image>}
    </DropBox>
  );
};
