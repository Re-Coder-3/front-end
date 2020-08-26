import React, { useCallback } from "react";
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

export default () => {
  const [uploadFile] = useMutation(uploadFileMutation);
  const onDrop = useCallback(
    async ([file]) => {
      await uploadFile({ variables: { file } });
      console.log(file);
    },
    [uploadFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <DropBox {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? <div></div> : <div></div>}
    </DropBox>
  );
};
