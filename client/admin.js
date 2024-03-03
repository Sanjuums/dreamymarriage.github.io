const entries = document.getElementById('entries');
window.onload = async() =>{
    const baseUrl = "http://localhost:3000/interests/"
    const response = await fetch(baseUrl, {
        method: "GET",
        headers: {
            "Content-Type": 'application/json'
        },
    })
    const interests = await response.json()
    interests.forEach(element => {
        // console.log(element)
        entries.innerHTML += entryTemplate(element)
    });
}

function entryTemplate({name, phone, email, msg=""}){
    return '<div class="entry">'+
        '<div class="name-data">'+name+'</div>'+
        '<div class="phone-data">'+phone+'</div>'+
        '<div class="email-data">'+email+'</div>'+
        '<div class="message-data">'+msg+'</div>'+
    '</div>'
}