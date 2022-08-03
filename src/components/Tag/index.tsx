import React, { FC } from 'react'
interface TagProps {
     title?: string;
}
const Tag: FC<TagProps> = ({ title="My title" }) => {
     return (
         <div style={{backgroundColor: 'yellow'}}>
             {title}
         </div>
     )
}
export default Tag