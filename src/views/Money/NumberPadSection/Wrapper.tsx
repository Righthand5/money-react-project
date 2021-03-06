import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output{
    background: white;
    font-size:36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
  > button{
    color:#786e64;
    float: left;
    width: 25%;
    height: 64px;
    border:none;
    &.ok{
      height:128px;
      float:right;
    }
    &.zero{
      width: 50%;
    }
    &:nth-child(1){
      background: #fde580;
    }
    &:nth-child(2),&:nth-child(5){
      background: #fb8d50;
    }
    &:nth-child(3),&:nth-child(6),&:nth-child(9){
      background: #fcbe75;
    }
    &:nth-child(4),&:nth-child(7),&:nth-child(10){
      background: #f0ab43;
    }
    &:nth-child(8),&:nth-child(11),&:nth-child(13){
      background: #f3eca4;
    }
    &:nth-child(12){
      background: #c65d57;
    }
    &:nth-child(14){
      background: #e26f50;
    }
  }
  }
`
export  {Wrapper}