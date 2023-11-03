let root=document.getElementById('root');



let reactElemant={
    typeof:'a',
    props:{
        href:'https://www.google.com/',
        target:'_blank'
    },
    children:"Clik me to vist google"
}
function customReander(root,reactElemant){
    const domelemant=document.createElement(reactElemant.typeof);
domelemant.innerHTML=reactElemant.children;
domelemant.setAttribute('href',reactElemant.props.href);
domelemant.setAttribute('target',reactElemant.props.target);

root.appendChild(domelemant);
}



customReander(root,reactElemant)