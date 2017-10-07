export default `

    :host(todo-page) {
       display:grid;
       grid-template-rows: repeat(12, 1fr);
       grid-template-columns: repeat(12, 1fr);
       height: 100%;
    }

    nav {
        padding: 1rem;
        grid-column-start: 1;
        grid-column-end: 13;
        grid-row-start: 1;
        grid-row-end: 1;
    }

    p {
        grid-column-start: 2;
        grid-column-end: 5;
        grid-row-start: 11;
        grid-row-end: 13;
    }

    #todo-list {
        grid-column-start: 4;
        grid-column-end: 10;
        grid-row-start: 2;
        grid-row-end: 10;
        background: whitesmoke;
    }
`;
