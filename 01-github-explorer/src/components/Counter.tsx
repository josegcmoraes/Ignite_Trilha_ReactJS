import { useState } from "react"
import '../styles/counter.scss';

type User = {
    name: string
    email: string
    address: {
        city?: string
        state?: string
    }
}
export function Counter() {
    const [counter, setCounter] = useState(0);
    function increment() {
        setCounter(counter + 1);
    }
    function decrement() {
        setCounter(counter - 1);
    }
    function showWelcomeMessage(user: User) {
        return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
    }
    const user = {
        name: 'Jhon Doe',
        email: 'john@doe.com',
        address: {
            state: 'New yoork'
        }
    }
    const message = showWelcomeMessage(user);

    return (
        <div className="class-counter-section">
            <div className="class-counter">
                <h2>Counter: {counter}</h2>
                <button type="button" onClick={increment}>
                    Increment
                </button>
                <button type="button" onClick={decrement}>
                    Decrement
                </button>
            </div>
            <h3>{message}</h3>
        </div>
    );
}