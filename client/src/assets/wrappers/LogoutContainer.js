import styled from 'styled-components';

const Wrapper = styled.div`
position: relative;
.logout-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.5rem;
}
.img{
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.dropdown{
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  box-shadow: var(--shadow-2);
  text-align: center;
  visibility: hidden;
  border-radius: var(--border-radius);
  background-color: var(--primary-500);
}
.show-dropdown{
  visibility: visible;
}
.dropdown-btn{
  border-radius: var(--border-radius);
  padding: 0.4rem;
  background: transparent;
  border-color: transparent;
  background-color: var(--primary-500);
  color: var(--white);
  letter-spacing: var(--letter-spacing);
  text-transform: capitalize;
  cursor: pointer;
  width: 100%;
  height: 100%;
}
  
`;

export default Wrapper;
