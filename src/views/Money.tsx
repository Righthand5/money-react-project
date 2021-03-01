import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {TagSection} from './Money/TagSection';
import {NoteSection} from "./Money/NoteSection";
import {NumberPadSection} from './Money/NumberPadSection';
import {MyLayout} from './Money/MyLayout';
type Category = '-' | '+'
function Money() {
    const [selected, setSelected] = useState({
        tagIds: [] as number[],
        note: '',
        category: '-' as Category,
        amount: 0

    })
    const onChange = (obj: Partial<typeof selected>)=>{
        setSelected({
            ...selected,
            ...obj
        })
    }
    return (
        <MyLayout>

            <hr />
            {selected.note}
            <hr />
            {selected.amount}
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
                              onOk = {()=>{}}
            />
        </MyLayout>
    );
}
export default Money;