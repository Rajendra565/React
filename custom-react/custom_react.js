const mainRoot=document.querySelector('#root');
const reactElemant={
    type:'a',
    props:{
        href:'http://google.com',
        target:'-blank'
    },
    children:'click me to vitit google!'
} 

function customRender(reactElemant,container){
    const domElement=document.createElement(reactElemant.type)
    domElement.innerHTML=reactElemant.children;
    domElement.setAttribute('href',reactElemant.props.href);
    domElement.setAttribute('target',reactElemant.props.target);


    container.appendChild(domElement)
}





customRender(reactElemant,mainRoot)