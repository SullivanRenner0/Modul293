const not_empty_elements = document.getElementsByClassName('not_empty');
const input = document.getElementsByClassName("input");
const icons = document.getElementsByClassName('icon');
const menu = document.querySelector('.hamburger');
const lmenu = document.querySelector('#little-menu')
const head = document.getElementById('head')
let menuOpen = false;

function senden()
{
    if(!checkemail())
    {
        alert("Bitte eine korrekte E-Mail Adresse angeben");
        return;
    }
    is_one_empty = false;
    var BreakException = {};
    try
    {
        for(i=0;i<not_empty_elements.length;i++)
        {
            if(not_empty_elements[i].value == "")
            {
                is_one_empty = true;
                throw BreakException
            }
        }
    }
    catch(e)
    {
        if(e != BreakException) throw e
    }
    if(is_one_empty)
    {
        alert("Bitte alle Felder mit * ausfüllen")
    }
    else
    {
        alert("Vielen Dank\nIhre Anfrage wurde gesendet")
    }
}

function loeschen()
{
    for(i=0;i<input.length;i++)
    {
        input[i].value = "";
    }
    document.getElementById('anrede')
    }

    function checkemail()
    {
    if(document.getElementById('email').value == null)
    {
        return false;
    }
    let email = document.getElementById('email').value
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function setIconVisibility(x) {
    if (x.matches) { // If media query matches
        for(i=0;i<icons.length;i++)
        {
            icons[i].style.display = 'none'
        }
    } else {
        for(i=0;i<icons.length;i++)
        {
            icons[i].style.display = ''
        }
    }
}

var x = window.matchMedia("(max-width: 886px)")
setIconVisibility(x) // Call listener function at run time
x.addListener(setIconVisibility)

var y = window.matchMedia("(min-width: 541px)")
setLittleMenu(y)
y.addListener(setLittleMenu)

function setLittleMenu(){
menu.classList.remove('open')
    lmenu.style.display = 'none'
    lmenu.style.backgroundColor = 'rgba(146, 168, 209, 0)'
}

function showMenu()
{
    if(!menuOpen)
    {
        menu.classList.add('open');
        menuOpen = true;
        let scroll = document.documentElement.scrollTop || document.body.scrollTop
        lmenu.style.top = scroll;
        lmenu.style.left = '0'
        lmenu.style.width = '100%'
        lmenu.style.height ='100%'
        lmenu.style.display = 'block'
        lmenu.style.visibility = ''
        lmenu.style.display = 'fixed'

        if(head)
        {
            head.style.backgroundColor = 'rgba(122 137 166 0)'
        }
    }
    else
    {
        menu.classList.remove('open');
        menuOpen = false;

        lmenu.style.width = '0'
        lmenu.style.height ='0'
        lmenu.style.display = 'none'
        lmenu.style.visibility = ''
        lmenu.style.top = '0'
        lmenu.style.left = '0'

        if(head)
        {
            head.style.backgroundColor = 'rgba(146, 168, 209, 0)'
        }
    }
}

function nachOben()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}