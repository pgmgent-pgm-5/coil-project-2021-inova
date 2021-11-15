import styled from "styled-components";
import Avatar from "./Avatar.js";

const StyledAvatar = styled(Avatar)`

display: flex;
justify-content: center;
align-items: center;
& div{
  width: 90px !important;
  height: 90px !important;
  margin-bottom: 1rem;
  border-radius:50%;
  border: 3px solid #725AC1;
  & img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
}





`;
export default StyledAvatar;