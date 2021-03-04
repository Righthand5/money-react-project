import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  >ul{
    display: flex;
    //background: #c4c4c4;
    >li{
        color: #4f5e8a;
        font-weight: bold;
        width: 50%;
        text-align: center;
        padding:16px 0;
        position: relative;
        &.selected{
        color: #fde67f;
        }
        &.selected::after{
          
          content:'';
          display:block;
          height: 3px;
          background: #fde67f;
          position: absolute;
          bottom:0;
          width: 100%;
          left:0;
        }
    }
  }
`
type Props = {
    value:'-' | '+',
    onChange:(value: '-' | '+')=>void
}
const CategorySection:React.FC<Props> = (props) =>{
    const [categoryList] = useState<('-' | '+')[]>(['-','+'])
    const category = props.value;
    const categroyMap = {'-':'支出','+':'收入'};
    return(
        //复习一下
        <Wrapper>
            <ul>
                {categoryList.map(c=>
                <li  key = {c} className={category === c ? 'selected' : ''}
                    onClick={()=>{props.onChange(c);}}
                >{categroyMap[c]}
                </li>
                )
                }
            </ul>
        </Wrapper>
    )
}
export {CategorySection}