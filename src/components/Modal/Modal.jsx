import { useDispatch } from "react-redux";
import styled from "styled-components";
import { close } from "../../redux/slices/modalSlice";
const BackWrap = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteWrap = styled.div`
  background-color: var(--lightgrey-color);
  width: 500px;
  height: 500px;
`;
function Modal({ children }) {
  const dispatch = useDispatch();
  return (
    <>
      <BackWrap onClick={() => dispatch(close())}>
        <WhiteWrap onClick={(e) => e.stopPropagation()}>{children}</WhiteWrap>
      </BackWrap>
    </>
  );
}

export default Modal;
