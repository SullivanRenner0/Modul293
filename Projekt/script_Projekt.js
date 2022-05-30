function senden()
{
    if(!checkemail())
    {
        alert("Bitte eine korrekte E-Mail Adresse angeben");
        return;
    }
    const not_empty_elements = document.getElementsByClassName('not_empty');
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
    const elements = document.getElementsByClassName("input");
    for(i=0;i<elements.length;i++)
    {
        elements[i].value = "";
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
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}