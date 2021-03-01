import styled from 'styled-components';
import React, {useState} from 'react';
import {useTags} from '../../useTags';
import {createId} from '../../lib/createId';

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
      > li{
            display: inline-block;
             background: #D9D9D9;
            border-radius:18px;
            font-size:14px;
            padding:3px 18px;
            margin: 8px 12px;
            &.selected{
              background: #f60;
            }
          }
  }
  > button{
    color:#666;
    background: none;
    border:none;
    padding:2px 4px;
    border-bottom: 1px solid #333;
    margin-top: 8px;
  }
`
type Props = {
    value:number[];
    onChange:(selected:number[])=>void;
}//我的返回值为空
const TagSection:React.FunctionComponent<Props> = (props)=>{
    const {tags,setTags} = useTags()
    const  selectedTagIds = props.value;
    const onAddTag = () =>{
        const tagName = window.prompt('新的标签名')
        if (tagName !== null){
            setTags([...tags,{id:createId(),name:tagName}])
        }
    }
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
        <ol>
            {tags.map(tag =>
                <li key={tag.id} onClick={
                    () => {
                        onToggleTag(tag.id)
                    }
                } className = {getClass(tag.id)}
                >{tag.name}</li>
            )}
        </ol>
        <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}

export {TagSection}