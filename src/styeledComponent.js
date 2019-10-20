import styled from "styled-components";

export const InputComponent = styled.input`
  background: #ffffff;
  border: 1px solid #979797;
  box-sizing: border-box;
  border-radius: 5px;
  height: 50px;
  width: 100%;
`;

export const Img = styled.img``;

export const Logo = styled(Img)``;
export const ProofImg = styled(Img)`
  background: url(Image.png);
  border: 1px solid #cfcfcf;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  width:200px
  height:270px
`;
export const Text = styled.h2`
  font-family: Arial;
  font-size: 18px;
  line-height: 21px;
  color: #3b3b3b;
  margin: 0;
  text-align: left;
`;

export const Description = styled.h3`
  display: block;
  color: #484848;
  font-size: 18px;
  text-transform: capitalize;
  margin: 0;
  text-align: left;
`;

export const TestQusetion = styled.h3`
  font-family: Arial;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.375px;
  color: #4a4a4a;
  mix-blend-mode: normal;
  opacity: 0.8;
  margin: 0;
  text-align: left;
`;

export const TextVerfiy = styled.em`
  font-family: Arial;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.266667px;
  color: #9b9b9b;
  text-align: left;
`;

export const AgreeMessage = styled.h3`
  font-family: ArialMT;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.266667px;
  color: #4a4a4a;
  margin: 0;
  line-height: 2;
`;

export const Select = styled.select`
  margin: 10px 0;
  padding: 10px 20px;
  outline: none;
  background: #ffffff;
  border: 1px solid #979797;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: ArialMT;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.266667px;
  text-align: left;
  color: #818181;
  width: 100%;
`;

export const Option = styled.option`
  background-color: #f1f1f1 !important;
  color: #322f2f;
  width: 70%;
  margin: 10px 0;
  padding: 10px 20px;
  border: none;
  outline: none;
  border-radius: 8px;
`;

export const Button = styled.button`
  border: 1px solid #4a4a4a;
  box-sizing: border-box;
  box-shadow: 0px 4px 13px rgba(173, 145, 183, 0.273438);
  border-radius: 3px;
  width: 40%;
  height: 30px;
  background: none;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 25px;
`;
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SelectContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 25px;
`;

export const VirfyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckInput = styled.input`
  transform: scale(1.5);
  cursor: pointer;  
  width: 20px;
  height: 30px;
  margin:0;
  padding:0;  
  margin-right:30px


}
`;

export const MauveBtn = styled.button`
  background: #8b51fc;
  box-shadow: 0px 4px 13px rgba(173, 145, 183, 0.273438);
  border-radius: 3px;
  height: 50px;
  width: 200px;
  font-family: Arial;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.333333px;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 10px 0 50px 0;
`;

export const MauveBtnBig = styled(MauveBtn)`
  width: 80%;
  margin-bottom: 0;
`;

export const Label = styled.label`
  width: 70%;
`;

export const ChekBoxContainer = styled(Label)`
  display: flex;
  height: 15px;
  justify-content: center;
`;

export const Brackline = styled.hr`
  margin: 20px 40px;
`;

export const LabelCheckbox = styled(Label)`
  display: flex;
`;

export const Anchor = styled.a``;
export const LinkDescription = styled.span`
  font-family: Arial;
  font-size: 18px;
  line-height: 21px;
  font-weight: bolder;
  text-align: center;
  letter-spacing: 0.3px;
  text-decoration-line: underline;
  color: #8b51fc;
`;
