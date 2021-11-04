import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import useStore from "../../Stores/store";
import { Button } from "./styles";

export const UpdateResult = () => {
  const { singUpResult, reset } = useStore((state) => ({
    singUpResult: state.result,
    reset: state.reset,
  }));
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    reset();
    navigate("/");
  }, [reset, navigate]);
  if (!singUpResult) return null;
  return (
    <>
      <div>{singUpResult.status}</div>
      <p>{singUpResult.message}</p>
      {singUpResult.status && <Button onClick={goBack}>Return</Button>}
    </>
  );
};
