import './test'

export default function Post({post='0',title='NO TITLE',desc='NO DESC',children}){


    return(
        <>
        {(post,title,desc)?<div className={'rose'}>
            <h1>{post}</h1>
            <h3>{title}</h3>
            <hr/>
            <p>{desc}</p>
            {children}
            
        </div>:<div className={'rose'}>
            {children}
        </div>}
        </>
    )
}