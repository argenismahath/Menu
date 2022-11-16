

const $domMenuElement= document.querySelector("#Menu").content,
       $DomOptions= document.querySelector('#Options').content,
       $body= document.querySelector('body');
let data = ['Info. del grupo',
'Seleccionar mensajes',
'Desactivar silencio de notificaciones',
'Vaciar mensajes','Salir del grupo'],
$fragment= document.createDocumentFragment();

function CreateMenu(){
    try{
        document.querySelector('#MenuContainer').remove();
    }catch(err){

    }
    let menuClone,
    clon;
    console.log(menuClone);
    data.forEach(element => {
        $DomOptions.querySelector('p').innerHTML=element;
        clon= document.importNode($DomOptions, true);
        $fragment.appendChild(clon);
    });
    clon= document.importNode($domMenuElement, true);
    clon.querySelector('div').appendChild($fragment);
    console.log(clon);
    $fragment.appendChild(clon);
    $body.appendChild($fragment);
    
}



$body.addEventListener('contextmenu', (e)=>{
    CreateMenu();
    let $menu= document.querySelector('#MenuContainer');

   $menu.style.left= e.clientX+'px';
   $menu.style.top= e.clientY+'px';

    console.log(e.clientX);

    e.preventDefault(); 
})