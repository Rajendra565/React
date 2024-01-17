
function customRender(reactElemant,container){
    const domElement=document.createElement(reactElemant.type)
    domElement.innerHTML=reactElemant.children;
    domElement.setAttribute('href',reactElemant.props.href);
    domElement.setAttribute(target,reactElemant.props.target);


    container.appendChild(domElement)
}



const reactElemant={
    type:'a',
    props:{
        href:'http://google.com',
        target:'-blank'
    },
    children:'click me to vitit google'
} 

const mainRoot=document.querySelector('#root');

customRender(reactElemant,mainRoot)