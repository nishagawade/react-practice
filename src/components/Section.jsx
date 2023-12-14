import React from 'react'

 const Section = ({title, children , ...props}) => {
    //the above props is written in order to group the object data which is rest parameter and props written in section tag is spread operator.
  return (
   //props are not passed to the inner elements , we have made a custom section component here 
   //but id is not forwarded unless we write it here , so we can use the rest parameter , so that we can access 
   //remaning all the props such as id , classname
    // <section id={id}> 
    //     <h2>{title}</h2>
    //     {children}
    // </section>

    <section {...props}> 
        <h2>{title}</h2>
        {children}
    </section>
  )
}

export default Section
