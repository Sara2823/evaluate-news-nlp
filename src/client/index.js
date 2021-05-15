import { checkForURL } from './js/URLChecker'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


//webpack will export these files to Client library, we dont have to worry about how :)
export{
    checkForURL,
    
}

const generate = document.getElementById('generate');
generate.addEventListener('click',()=>{

    const link = document.getElementById('link').value;
    console.log("Listner" + link);

    if (checkForURL(link)){
        console.log("link checked!");
        postData('/add',{text:link})
    } else{console.log("invalid link");}
})

const postData = async ( url = '', data = {}) => {
    console.log("postData" + url + data.text);
    const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

    const newData = await response.json();
    console.log("=======newData========="+ newData);
    return newData;
}





 