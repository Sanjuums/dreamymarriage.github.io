const serviceBlocks = document.querySelectorAll(".service-block");

serviceBlocks.forEach((serviceBlock) => {
    const services = serviceBlock.querySelectorAll(".service");
    services.forEach(service => {
        document.addEventListener('scroll', () => {
            let DisplayPosition = serviceBlock.firstElementChild.getBoundingClientRect().top;
            let myPosition = service.getBoundingClientRect().top;
            if (DisplayPosition == myPosition) {
                console.log(1)
                service.style.opacity = "1"
            } else {
                console.log(0)
                service.style.opacity = "0"
            }
        })
    })
});
