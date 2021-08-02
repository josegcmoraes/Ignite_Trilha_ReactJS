import React, { useState } from 'react';
import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    );
}


// throw new Error('Eita Giovana, o forninho caiu!');
// export function App() {
//     return <h1>Tela Principal</h1>
// }

// const user = {
//     name: 'Jose',
// };

// console.log(user.address?.street)
// console.log(user.address?.street || 'Address not found')





