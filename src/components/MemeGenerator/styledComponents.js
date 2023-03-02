// Style your components here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 100px;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-self: center;
  margin-right: 20px;
  @media (max-width: 767px) {
    width: 90%;
    margin-right: 0px;
    margin-bottom: 20px;
    order: 1;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 50px;
  color: #35469c;
  margin-bottom: 15px;
  display: block;
  @media (max-width: 767px) {
    display: none;
  }
`

export const HeadingOne = styled(Heading)`
  display: none;
  @media (max-width: 767px) {
    display: block;
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
  }
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #7e858e;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 7px;
  border: 1px solid #5a7184;
  font-family: 'Roboto';
  font-size: 15px;
  color: #5a7184;
  margin-top: 5px;
  margin-bottom: 20px;
  padding: 15px;
  outline: none;
`

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border-width: 0px;
  border-radius: 8px;
  background-color: #0b69ff;
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BgImage = styled.div`
  background-image: url(${props => props.bgImage});
  width: 45%;
  height: 400px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  align-self: center;
  @media (max-width: 767px) {
    width: 90%;
    order: 0;
    margin-bottom: 60px;
  }
`

export const Paragrph = styled.p`
  font-family: 'Roboto';
  font-size: ${props => props.selectValue}px;
  color: #ffffff;
  text-align: center;
`

export const Select = styled.select`
  width: 100%;
  height: 50px;
  border-radius: 7px;
  border: 1px solid #5a7184;
  font-family: 'Roboto';
  font-size: 15px;
  color: #5a7184;
  margin-top: 5px;
  margin-bottom: 20px;
  padding: 15px;
  outline: none;
`
