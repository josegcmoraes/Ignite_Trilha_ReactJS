import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";
// const repositoryName = {
//     name: 'unformT2'
// }

// const repository = {
//     name: 'unform',
//     description: 'Forms in React',
//     html_url: "https://github.com/unform/unform"
// }

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
        // .then(data => console.log(data))
    }, []);

    // console.log(repositories)

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}

                {/* <RepositoryItem 
                    repository="unform2" 
                    description="Forms in React" 
                    link="https://github.com/unform/unform" 
                /> */}
                {/* <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} /> */}

                {/* <li>
                    <strong>{repositoryName.name}</strong>
                    <p>Forms in React</p>

                    <a href="http://">
                Acessar repositórios
                    </a>
                </li> */}
            </ul >
        </section >
    )
}