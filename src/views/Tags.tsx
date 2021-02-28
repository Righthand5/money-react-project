import Layout from '../components/Layout';
import React from 'react';
import {useTags} from 'useTags';

function Tags() {
    useTags()
    return (
        <Layout>
            <h2>标签页面</h2>
        </Layout>
    );
}
export default Tags;