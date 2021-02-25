import React from 'react';
import {CategorySection} from './Money/CategorySection';
import {TagSection} from './Money/TagSection';
import {NoteSection} from "./Money/NoteSection";
import {NumberPadSection} from './Money/NumberPadSection';
import {MyLayout} from './Money/MyLayout';
function Money() {
    return (
        <MyLayout>
            <TagSection/>
            <NoteSection/>
            <CategorySection/>
            <NumberPadSection/>
        </MyLayout>
    );
}
export default Money;