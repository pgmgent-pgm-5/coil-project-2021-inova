import styled from "styled-components";
import AddExpense from "./AddExpense.js";

const StyledAddExpense = styled(AddExpense)`
 
  height: 100vh;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & div{
    margin: 0;
    padding: 0;
    width: 100%;
    & h2{
      font-size: 1.5rem;
      font-weight: bold;
      color:#424242;
      margin-bottom: 2rem;
    }
  }

`;
export default StyledAddExpense;