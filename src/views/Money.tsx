import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {TagSection} from './Money/TagSection';
import {NoteSection} from "./Money/NoteSection";
import {NumberPadSection} from './Money/NumberPadSection';
import {MyLayout} from './Money/MyLayout';
import {useRecords} from '../hooks/useRecords';
type Category = '-' | '+'
const  defaultFormData = {
    tagIds: [] as number[],
    note:'',
    category: '-' as Category,
    amount:0
}
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
        addRecord(selected)
        alert('保存成功')
        setSelected(defaultFormData)
    }
    return (
        <MyLayout>
            {selected.note}
            <TagSection value = {selected.tagIds} onChange={(tagIds)=>onChange({tagIds})}/>
            <NoteSection  value={selected.note}
                          onChange = {(note)=>onChange({note})
                          }
            />
            <CategorySection value = {selected.category}
                             onChange = {(category)=>onChange({category})}
            />
            <NumberPadSection value = {selected.amount}
                              onChange = {(amount)=>onChange({amount})}
                              onOk = {submit}
            />
        </MyLayout>
    );
}
export default Money;