import styled from 'styled-components';
import React, {useState} from 'react';
import {useTags} from '../../hooks/useTags';
import Icon from '../../components/icon';

const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol{
      margin:0 -12px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > li{
            background: #a8c8df;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius:18px;
            font-size:14px;
            padding:3px 18px;
            margin: 8px 12px;
            color: #f6f6f6;
            .icon{
              height: 30px;
              width: 30px;
            }
            &.selected{
              background: #f60;
            }
          }
  }
  > div{
    width: 100%;
    display: flex;
    justify-content:flex-end;
      >button{
    color:#fcfbfb;
    background: #a8c8df;
    border:none;
    padding:2px 4px;
    margin-top: 8px;
     box-shadow: 10px 10px 5px #888888;
    }
  }
`
type Props = {
    value:number[];
    onChange:(selected:number[])=>void;
}//我的返回值为空
const TagSection:React.FunctionComponent<Props> = (props)=>{
    const {tags,addTag,setTags} = useTags()
    const  selectedTagIds = props.value;
    const onToggleTag = (tagId:number) =>{
        const index = selectedTagIds.indexOf(tagId)
        if(index >= 0){
            props.onChange(selectedTagIds.filter(t=>t !== tagId));
        }else{
            props.onChange([...selectedTagIds,tagId])
        }
    }
    const getClass = (tagId:number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
    return(
        <Wrapper>
        <ol className="MinRen">
            {tags.map(tag =>
                <li key={tag.id} onClick={
                    () => {
                        onToggleTag(tag.id)
                    }
                } className = {getClass(tag.id)}
                ><Icon name="Naruto"/><span>{tag.name}</span></li>
            )}
        </ol>
            <div><button onClick={addTag}>新增标签</button></div>
        </Wrapper>
    )
}

export {TagSection}