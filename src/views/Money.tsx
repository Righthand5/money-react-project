import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {TagSection} from './Money/TagSection';
import {NoteSection} from "./Money/NoteSection";
import {NumberPadSection} from './Money/NumberPadSection';
import {MyLayout} from './Money/MyLayout';
import {useRecords} from '../hooks/useRecords';
import styled from 'styled-components';
type Category = '-' | '+'
const  defaultFormData = {
    tagIds: [] as number[],
    note:'',
    category: '-' as Category,
    amount:0
}
const CategoryWrapper = styled.div`
  background: #a8c8df;
`

function Money() {
    const [selected, setSelected] = useState(defaultFormData)
    const {addRecord} = useRecords()
    const onChange = (obj: Partial<typeof selected>)=>{
        setSelected({
            ...selected,
            ...obj
        })
    }
    const submit = () =>{
        if(addRecord(selected)) {
            alert('保存成功')
            setSelected(defaultFormData)
        }
    }
    return (
        <MyLayout scrollTop={9999}>
            <TagSection value = {selected.tagIds} onChange={(tagIds)=>onChange({tagIds})}/>
            <NoteSection  value={selected.note}
                          onChange = {(note)=>onChange({note})
                          }
            />
            <CategoryWrapper>
                <CategorySection value = {selected.category}
                             onChange = {(category)=>onChange({category})}
                />
            </CategoryWrapper>
            <NumberPadSection value = {selected.amount}
                              onChange = {(amount)=>onChange({amount})}
                              onOk = {submit}
            />
        </MyLayout>
    );
}
export default Money;