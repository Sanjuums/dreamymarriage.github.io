
const serviceBlocks = document.querySelectorAll(".service-block");

serviceBlocks.forEach((serviceBlock) => {
    const services = serviceBlock.querySelectorAll(".service");
    services.forEach(service => {
        document.addEventListener('scroll', () => {
            let DisplayPosition = serviceBlock.firstElementChild.getBoundingClientRect().top;
            let myPosition = service.getBoundingClientRect().top;
            if (DisplayPosition == myPosition) {
                service.style.opacity = "1"
            } else {
                service.style.opacity = "0"
            }
        })
    })
});


const form = document.querySelector('form');
form.addEventListener('submit',async (event) =>{
    event.preventDefault();
    console.log(1)

    const Name = document.getElementById("Name");
    const Phone = document.getElementById("Phone");
    const Email = document.getElementById("Email");

    const baseUrl = "http://localhost:3000/interests/"
    const posting = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            name: Name.value,
            phone : Phone.value,
            email: Email.value
        })
    })
    console.log(await posting.json())
    if(posting.ok == true){
        alert("Your response recorded succesfully")
    }
})