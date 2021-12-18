
//  clear.innerHTML = null  
// let token = '2101665073:AAHHt-jvvLZdck2XhickUjIgwO6EdLqFAEM'
// if (!window.localStorage.getItem('Ushla')) window.localStorage.setItem('Ushla','')



// async function renderChat(id){
//    let baz_olingam_mal = window.localStorage.getItem(id)
//    baz_olingam_mal = JSON.parse(baz_olingam_mal)
//    for(let i of baz_olingam_mal){
//        if(i[0]==130230){
//            MyTextSend(i[1])
//        }
//        else if (i[0]==id){
//            YouTextSend(i[1],i[0])
//        }
//    }   
// }

// async function YouTextLocalADD(token){
//     let respone = await fetch(`https://api.telegram.org/bot${token}/getUpdates`) 
//     if (!respone) return 
//     let arr = await respone.json()
//     arr = arr.result
//     let son;

//     if (arr[arr.length-1].edited_message){
//         son = [arr[arr.length-1].update_id,arr[arr.length-1].edited_message.chat.id,arr[arr.length-1].edited_message.text]
        
//     }else{
//         son = [arr[arr.length-1].update_id,arr[arr.length-1].message.chat.id,arr[arr.length-1].message.text]
//         }
//     let b_ol = window.localStorage.getItem('Ushla') 
//     if (!b_ol) window.localStorage.setItem('Ushla','')
//     if(b_ol==(son +'')) return
//     window.localStorage.setItem("Ushla",[son])

//     function Bazaga_qosh(){
//         if(!window.localStorage.getItem(son[1])) window.localStorage.setItem(son[1],JSON.stringify([]))
//         let malumotni_ol = window.localStorage.getItem(son[1])

//         malumotni_ol = JSON.parse(malumotni_ol)
//         window.localStorage.setItem(son[1],JSON.stringify([...malumotni_ol,[son[1],son[2]]]))

//     }
//     Bazaga_qosh()
//     clear.innerHTML = null

//     renderChat(son[1])

// }

// setInterval(() => {
                
//     YouTextLocalADD(token)
    
// }, 500);




// async function hey(){
//     let respone = await fetch(`https://api.telegram.org/bot${token}/getUpdates`)
//     let arr = await respone.json()
//     arr = arr.result
//     let storeNames = []
//     let storeBaza = []


//     for(let mesage of arr){
//         if (mesage.edited_message && !storeNames.includes(mesage.edited_message.chat.first_name))
//         {
//             storeNames.push(mesage.edited_message.chat.first_name)
//             storeBaza.push({id:mesage.edited_message.chat.id, first_name: mesage.edited_message.chat.first_name, username: mesage.edited_message.chat.username||"yoq"})
//         }
//         else if(!storeNames.includes(mesage.message.chat.first_name)){
//             storeNames.push(mesage.message.chat.first_name)
//             storeBaza.push({id:mesage.message.chat.id, first_name: mesage.message.chat.first_name, username: mesage.message.chat.username||"yoq"})
//         }
//     }
//     storeBaza.forEach((e)=>{
//         userRender(e.first_name,  e.username, e.id)
//     })
// }





// async function UpdatesList(){
//     let respone = await fetch(`https://api.telegram.org/bot${token}/getUpdates`)
//     let arr = await respone.json()
//     arr = arr.result
//     let storeNames = []
//     let storeBaza = []
    
//     for(let mesage of arr){
//         if (mesage.edited_message && !storeNames.includes(mesage.edited_message.chat.first_name))
//         {
//             storeNames.push(mesage.edited_message.chat.first_name)
//             storeBaza.push({id:mesage.edited_message.chat.id, first_name: mesage.edited_message.chat.first_name, username: mesage.edited_message.chat.username||"yoq"})
//         }
//         else if(mesage.message &&!storeNames.includes(mesage.message.chat.first_name)){
//             storeNames.push(mesage.message.chat.first_name)
//             storeBaza.push({id:mesage.message.chat.id, first_name: mesage.message.chat.first_name, username: mesage.message.chat.username||"yoq"})
//         }
//     }
//     storeBaza.forEach((e)=>{
//         userRender(e.first_name,  e.username, e.id)
//     })


//     let list_li = document.querySelectorAll('.list_li')

//     list_li.forEach(even =>{

//         even.onclick = (e)=>{
//             e.preventDefault();
//             clear.innerHTML = null        
//             let sumbmit = document.querySelector('.sumbmit')
//             let inputMessege = document.querySelector('.inputMessege')
            
//             let kelganmi = window.localStorage.getItem(even.value)
//             if (!kelganmi) window.localStorage.setItem(even.value,JSON.stringify([]))
            
            
//             let tok = even.value
//             nomi.textContent = even.firstChild.textContent
           

           
//             renderChat(tok)

//         sumbmit.onclick = (e)=>{
//             e.preventDefault();
//             SendMesage(even.value,inputMessege.value)
//             MyTextSend(inputMessege.value)
//             let ol = window.localStorage.getItem(even.value)
//             ol = JSON.parse(ol)
            
//             let array = [130230,inputMessege.value]
            
//             window.localStorage.setItem(even.value,JSON.stringify([...ol,array]))
//             inputMessege.value =null
//             }

//         }

        
//     })
// }
// UpdatesList()


// function userRender(MyName,u,id){
//     let userList = document.querySelector('.userList')
//     let li = document.createElement('li')
//     li.className = 'list_li'
//     li.setAttribute('value',id) 
//     li.innerHTML =
//     `<span class="UserName">${MyName}</span> <span class="userId">${u}</span>
//     `
//     userList.append(li)

// }



//  async function SendMesage(id,text){
//     let respone = await fetch(`https://api.telegram.org/bot${token}/sendMessage`,{
//         method :"POST",
//         headers:{'Content-Type':'application/json'},
//         body:JSON.stringify({
//             chat_id :id,
//             text:text
//         })
//     })

// }

// async function MyTextSend(text,id=130230){
//     let div = document.createElement('div')
//     let article = document.querySelector('article')
//     div.className = "youTextBox"
//     div.setAttribute('value',id)
//     div.innerHTML = `
//     <p class="youText" id="Bazaga" value=${id}>${text}</p>
//     `
//     article.append(div)
// }

// async function YouTextSend(text,id){
//     let div = document.createElement('div')
//     let article = document.querySelector('article')
//     div.setAttribute('value',id)

//     div.className = "myTextFather"
//     div.innerHTML = `
//     <p class="myText" id="Bazaga" value=${id}>${text}</p>
//     `
//     article.append(div)
// }



// //-------------------------------------------------------------------




console.log('kdf'.startsWith(k))






