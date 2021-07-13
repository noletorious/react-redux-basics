import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Card = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CountWrap = styled.span``;

const Button = styled.button`
  padding: 0.5em 1em;
  border-radius: 1em;
  background-color: #efefef;
  border: none;
  margin: 0 1em;
  &:hover {
    cursor: pointer;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex: 1;
  margin-top: 1em;
`;
const IncrementButton = styled(Button)``;
const DecrementButton = styled(Button)``;

function Counter() {
  let counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function IncrementHandler() {
    dispatch({ type: "INCREMENT" });
    console.log("Add 1");
  }

  function DecrementHandler() {
    dispatch({ type: "DECREMENT" });
    console.log("Subtract 1");
  }

  return (
    <Card>
      <CountWrap>{counter}</CountWrap>
      <Buttons>
        <IncrementButton onClick={IncrementHandler}>Increment</IncrementButton>
        <DecrementButton onClick={DecrementHandler}>Decrement</DecrementButton>
      </Buttons>
    </Card>
  );
}

export default Counter;
