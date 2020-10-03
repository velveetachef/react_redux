import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'Front end framework'
    },
    {
        title: 'Why use React?',
        content: 'Its great'
    },
    {
        title: 'How do you use it?',
        content: 'by creating components'
    }
];

export default () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
};
