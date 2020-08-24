import React, { useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const uploadFileMutation = gql`
  mutation UploadFile($file: Upload!) {
    singleUpload(file: $file)
  }
`;

const DropBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  background-color: white;
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
