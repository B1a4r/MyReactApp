export default function FuncProps({name,mail,age,article = 'no article',children}){

    // const name = props.name;
    // const mail = props.mail
    // const age = props.age
    // const article = props.article
    return(
        <>
        <div>
        <h1>{name}</h1>
        <h3>{mail}</h3>
        <h3>{age}</h3>
        <hr />
        <p>{children}</p>
        <hr /><hr />
        </div>
        </>
    );
}