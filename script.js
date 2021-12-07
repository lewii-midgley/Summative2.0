console.log("Hello i am linked");

const scroll = document.getElementById("vehicleButtonScroll");

const vehicleFilterBtn = document.querySelector('#vehicleFilterBtn');

const payment = document.querySelector('#paymentButton');

let script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key +'&callback=initMap&libraries=places&v=weekly" async defer >';

$(document).ready(function(){
    $('body').append(script);
});

let vehicleArray = [
    {
        id: 01,
        vehicleName: 'Yamaha T-Max',
        type: 'motor bike',
        image:'./img/scooter.png',
        description: '<i class="fas fa-cog descriptionIcon"></i>Automatic',
        description2: '<i class="fas fa-motorcycle descriptionIcon"></i>530 cc Engine',
        description3: '<i class="fas fa-suitcase-rolling descriptionIcon"></i> Underseat Storage',
        litresPerKm: '3.7L/100km',
        litresPerKmCalc: 3.7,
        pricePerDay: 97,
        minPerson: 1,
        maxPerson: 1,
        minDay: 1,
        maxDay: 5
    },
    {
        id: 02,
        vehicleName: 'BMW F750GS',
        type: 'motor bike',
        image:'./img/moto2.png',
        description: '<i class="fas fa-cog descriptionIcon"></i> Manual 5 gears',
        description2: '<i class="fas fa-motorcycle descriptionIcon"></i>2 litre Engine',
        description3: '<i class="fas fa-suitcase-rolling descriptionIcon"></i> Side Carage Storage',
        litresPerKm: '3.7L/100km',
        litresPerKmCalc: 3.7,
        pricePerDay: 109,
        minPerson: 1,
        maxPerson: 1,
        minDay: 1,
        maxDay: 5
    },
    {
        id: 03,
        vehicleName: 'VW Golf Mark 8',
        type: 'small car',
        image:'./img/golf.png',
        description: '<i class="fas fa-cog descriptionIcon"></i> Automatic',
        description2: '<i class="fas fa-suitcase-rolling descriptionIcon"></i> 1 Suitcase',
        description3: '<i class="fas fa-temperature-low descriptionIcon"></i>A/C',
        litresPerKm: '8.5L/100km',
        litresPerKmCalc: 8.5,
        pricePerDay: 122,
        minPerson: 1,
        maxPerson: 2,
        minDay: 1,
        maxDay: 10
    },
    {
        id: 04,
        vehicleName: 'Toyota Corolla Hatch',
        type: 'small car',
        image:'./img/rolla.png',
        description: '<i class="fas fa-cog descriptionIcon"></i> Manual 5 Gear',
        description2: '<i class="fas fa-suitcase-rolling descriptionIcon"></i> 1 Suitcase',
        description3: '<i class="fas fa-temperature-low descriptionIcon"></i>A/C',
        litresPerKm: '8.5L/100km',
        litresPerKmCalc: 8.5,
        pricePerDay: 129,
        minPerson: 1,
        maxPerson: 2,
        minDay: 1,
        maxDay: 10
    },
    {
        id: 05,
        vehicleName: 'Toyota Yaris Hatch',
        type: 'small car',
        image:'./img/yota.png',
        description: '<i class="fas fa-cog descriptionIcon"></i> Automatic',
        description2: '<i class="fas fa-suitcase-rolling descriptionIcon"></i> 1 Suitcase',
        description3: '<i class="fas fa-temperature-low descriptionIcon"></i>A/C',
        litresPerKm: '8.5L/100km',
        litresPerKmCalc: 8.5,
        pricePerDay: 134,
        minPerson: 1,
        maxPerson: 2,
        minDay: 1,
        maxDay: 10
    },
    {
        id: 06,
        vehicleName: 'Mercedes-Benz GLE AWD',
        type: 'medium car',
        image:'./img/benz.png',
        description: '<i class="fas fa-cog descriptionIcon"></i> Manual 6 Gear',
        description2: '<i class="fas fa-suitcase-rolling descriptionIcon"></i> 2 Suitcases',
        description3: '<i class="fas fa-temperature-low descriptionIcon"></i>A/C <i class="fas fa-satellite-dish descriptionIcon"></i>Sat Nav',
        litresPerKm: '9.7L/100km',
        litresPerKmCalc: 9.7,
        pricePerDay: 142,
        minPerson: 1,
        maxPerson: 5,
        minDay: 3,
        maxDay: 10
    },
    {
        id: 07,
        vehicleName: 'Nissan Navara 4x4',
        type: 'medium car',
        image:'./img/4wd.png',
        description: '<i class="fas fa-cog descriptionIcon"></i> Automatic',
        description2: '<i class="fas fa-suitcase-rolling descriptionIcon"></i> 1 Suitcase',
        description3: '<i class="fas fa-temperature-low descriptionIcon"></i>A/C <i class="fas fa-satellite-dish descriptionIcon"></i>Sat Nav',
        litresPerKm: '9.7L/100km',
        litresPerKmCalc: 9.7,
        pricePerDay: 144,
        minPerson: 1,
        maxPerson: 5,
        minDay: 3,
        maxDay: 10
    },
    {
        id: 08,
        vehicleName: 'Ford Tourneo',
        type: 'medium car',
        image:'./img/van.png',
        description: '<i class="fas fa-cog descriptionIcon"></i> Manual 5 Gear',
        description2: '<i class="fas fa-suitcase-rolling descriptionIcon"></i> 3 Suitcases',
        description3: '<i class="fas fa-temperature-low descriptionIcon"></i>A/C',
        litresPerKm: '9.7L/100km',
        litresPerKmCalc: 9.7,
        pricePerDay: 144,
        minPerson: 1,
        maxPerson: 5,
        minDay: 3,
        maxDay: 10
    },
    {
        id: 09,
        vehicleName: 'Motorhome',
        type: 'motorhome',
        image:'./img/home2.png',
        description: '<i class="fas fa-cog descriptionIcon"></i> Manual 5 speed',
        description2: '<i class="fas fa-suitcase-rolling descriptionIcon"></i> 4 Suitcases',
        description3: '<i class="fas fa-temperature-low descriptionIcon"></i>A/C <i class="fas fa-satellite-dish descriptionIcon"></i>Sat Nav',
        litresPerKm: '17L/100km',
        litresPerKmCalc: 17,
        pricePerDay: 200,
        minPerson: 2,
        maxPerson: 6,
        minDay: 2,
        maxDay: 15
    },
    {
        id: 10,
        vehicleName: 'Motorbus',
        type: 'motorhome',
        image:'./img/motorH.png',
        description: '<i class="fas fa-cog descriptionIcon"></i> Automatic',
        description2: '<i class="fas fa-suitcase-rolling descriptionIcon"></i> 6 Suitcases',
        description3: '<i class="fas fa-temperature-low descriptionIcon"></i>A/C <i class="fas fa-satellite-dish descriptionIcon"></i>Sat Nav',
        litresPerKm: '17L/100km',
        litresPerKmCalc: 17,
        pricePerDay: 230,
        minPerson: 2,
        maxPerson: 6,
        minDay: 2,
        maxDay: 15
    }
];


function vehicleScroll(){

    scroll.scrollIntoView();
}




function initMap(){
    $('#checkInDate').datepicker({

        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        minDate: new Date(),
        maxDate: '+1y',
        onSelect: function(date){

            let selectDate = new Date(date);
            let msecInADay = 86400000;
            let stDate = new Date(selectDate.getTime() + msecInADay);

            $('#checkOutDate').datepicker('option', 'minDate', stDate);
            let enDate = new Date(selectDate.getTime() + 15 * msecInADay);

            $('#checkOutDate').datepicker('option','maxDate', enDate);
        }
    });

    $('#checkOutDate').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true
    });

    $('#vehicleFilterBtn').click(function(){
        dateDiff();
    });

        let start = new google.maps.places.Autocomplete(
            document.getElementById('start'),
            {
                types: ['(cities)']
            }
        ); 

        let end = new google.maps.places.Autocomplete(
            document.getElementById('end'),
            {
                types: ['(cities)']
            }
        );

    const directionService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 0,
        minZoom: 5,
        center: {lat: 40.5094286, lng: 171.346964}
    });

    directionsRenderer.setMap(map);

    document.getElementById('vehicleFilterBtn').addEventListener('click', () => {
        calulateAndDisplayRoute(directionService, directionsRenderer);
    });
}




function dateDiff(kmDistance){

    let start = $(checkInDate).datepicker('getDate');
    let end = $(checkOutDate).datepicker('getDate');

    let checkInDay = start.getDate(),
    checkInMonth = start.getMonth(),
    checkInYear = start.getFullYear();

    let checkOutDay = end.getDate(),
    checkOutMonth = end.getMonth(),
    checkOutYear = end.getFullYear(); 

    let startDate = [checkInDay,checkInMonth,checkInYear].join('/');
    let endDate = [checkOutDay,checkOutMonth,checkOutYear].join('/');

    let days = (end - start)/1000/60/60/24;

    $('#days').val(days);

    let pickUp = document.getElementById('start').value;
    let dropOff = document.getElementById('end').value;

    modal(startDate, endDate, pickUp, dropOff, days, kmDistance);
}



function modal(checkIn, checkOut, pickedUp, droppedOff, totalDays, distanceKM){

    $(".cardContent--priceContainer__button").click(function(){

        let i = 0;
        for(i = 0; i < vehicleArray.length; i++){

            if(parseInt(this.id) === vehicleArray[i].id){
                $(".modalContainer--left").empty().append(

                    `
                    <div class="modalContainer">

                    <div class="modalContainer--left">
                    <h2 class="modalContainer--left__header">Travel Details</h2>

                    <div class="modalContainer--left__dates">
                    <h3 class="modalContainer--left__dates--date">${checkIn}</h3>
                    <i class="fas fa-long-arrow-alt-right formContainer--datesContainer__icon"></i>
                    <h3 class="modalContainer--left__dates--date">${checkOut}</h3> 
                    </div>

                    <div class="modalContainer--left__locations">
                    <h3 class="modalContainer--left__locations--location">${pickedUp}</h3>
                    <i class="fas fa-long-arrow-alt-right formContainer--datesContainer__icon"></i>
                    <h3 class="modalContainer--left__locations--location">${droppedOff}</h3>
                    </div>

                    <div class="modalContainer--left__carContainer">
                    <div class="modalContainer--left__carContainer--car">
                    <img class="modalContainer--left__carContainer--car__img" src="${vehicleArray[i].image}" alt="Vehicle Image">
                    </div>


                    <div class="modalContainer--left__carContainer--right">
                    <h2 class="modalContainer--left__carContainer--right__nameVehicle">${vehicleArray[i].vehicleName}</h2>

                    <h4 class="modalContainer--left__carContainer--right__description">${vehicleArray[i].description}</h4>
                    <h4 class="modalContainer--left__carContainer--right__description">${vehicleArray[i].description2}</h4>
                    <h4 class="modalContainer--left__carContainer--right__description3">${vehicleArray[i].description3}</h4>

                    </div>
                    </div>

                    <div class="modalContainer--left__totals">

                    <div class="modalContainer--left__totals--left">

                    <h2 class="modalContainer--left__totals--textTop">Total Price:</h2>
                    <h2 class="modalContainer--left__totals--text">$${vehicleArray[i].pricePerDay * totalDays}</h2>

                    </div>
                    <div class="modalContainer--left__totals--right">

                    <h2 class="modalContainer--left__totals--textTop">Total Fuel Consumption:</h2>
                    <h2 class="modalContainer--left__totals--text">${((distanceKM/100) * vehicleArray[i].litresPerKmCalc)}L</h2>

                    </div>

                    </div>

                    </div>
                    </div>
                    `
                );
            }
        }
    });
}



function generateVehicle(x){

    let curr = document.getElementById("currency").value;
    let price;

    if(curr == "AUD"){
        price = (vehicleArray[x].pricePerDay * 0.96).toFixed(2);
    } else{
        price = vehicleArray[x].pricePerDay;
    }

    $('#cardContent').append(
        `
        <div class="cardContent--card">

        <div class="cardContent--vehicleContainer">

            <img class="cardContent--vehicleContainer__img" src="${vehicleArray[x].image}" alt="Vehicle Image">
        </div>

        <div class="cardContent--informationContainer">

            <h2 class="cardContent--informationContainer__h2">${vehicleArray[x].vehicleName}</h2>

            <div class="cardContent--informationContainer__descriptions">

            <h4 class="cardContent--informationContainer__descriptions--first">${vehicleArray[x].description}</h4>
            <h4 class="cardContent--informationContainer__descriptions--second">${vehicleArray[x].description2}</h4>
            <h4 class="cardContent--informationContainer__descriptions--third">${vehicleArray[x].description3}</h4>
    
            </div>

            <div class="cardContent--informationContainer__bottomRow">
            <i class="fas fa-gas-pump bottomIcons"></i>
                <h5 class="cardContent--informationContainer__bottomRow--h5">${vehicleArray[x].litresPerKm}</h5>

                <i class="fas fa-user-friends bottomIcons"></i>
                <h5 class="cardContent--informationContainer__bottomRow--h5">${vehicleArray[x].maxPerson}</h5>
            </div>

        </div>

        <div class="cardContent--priceContainer">
            <h1 class="cardContent--priceContainer__h1">$${price}/<br>Per Day</h1>

            <button id="${vehicleArray[x].id}" type="button" class="cardContent--priceContainer__button btn btn-primary" data-toggle="modal" data-target="#exampleModal">Select</button>

        </div>
    </div>
        `
    );
}



function generateNone(){

    $('#cardContent').append(
        `
        <div class="cardContent--nonText">

        <h1 class="cardContent--nonText__h1">Sorry we don't currently have any vehicles that fit your search!</h1>

        <a href="index.html"><button class="cardContent--nonText__button">Search Again</button></a>

    </div>
        `
    );
}



function userSubmit(event){
    
    event.preventDefault();

    $('#cardContent').empty();

    let msDay = 1000 * 3600 * 24;
    const checkInDate = new Date($('#checkInDate').val());
    const checkOutDate = new Date($('#checkOutDate').val());

    if ( (checkInDate == 'Invalid Date') || (checkOutDate == 'Invalid Date') ){
        alert('Please enter a Pick Up and Drop off Date');
    }

    let difference = checkOutDate .getTime() - checkInDate.getTime();
    let dayDifference = difference/msDay;
    let valueOfPeople = ($('#valueOfpeople').val());
    let numberOfPeople = parseInt(valueOfPeople);

    checkInData(dayDifference, numberOfPeople);
}



function checkInData(daysBooked, peopleBooked){

    const cardHolder = document.querySelector(".cardContent");
    let i = 0; 
    for(i = 0; i < vehicleArray.length; i++){
        if((daysBooked >= vehicleArray[i].minDay) && (daysBooked <= vehicleArray[i].maxDay) && (peopleBooked >= vehicleArray[i].minPerson) && (peopleBooked <= vehicleArray[i].maxPerson)){
            
            generateVehicle(i);
        }
    }
    if(cardHolder.childNodes.length == 0){
        generateNone();
    }
    modal();
}




function calulateAndDisplayRoute(directionService, directionsRenderer){
   
    const waypts = [];
    const vArray = document.getElementById('waypoints');

    for (let i = 0; i < vArray.length; i++){
        if(vArray.options[i].selected){
            waypts.push({
                location: vArray[i].value,
                stopover: true,
            });
        }
    }

    directionService.route({

        origin: document.getElementById('start').value,
        destination: document.getElementById('end').value,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
    },

    (response, status) =>{
        if (status === "OK"){

            directionsRenderer.setDirections(response);
            const route = response.routes[0];
            const summaryPanel = document.getElementById('mapRoute');

            summaryPanel.innerHTML = "";

            let distanceKm = 0;
            for(let i = 0; i < route.legs.length; i++){
                const routeSegment = i + 1;

                summaryPanel.innerHTML +=
                "Route Segment: " + routeSegment + "</><br>";
                summaryPanel.innerHTML += route.legs[i].start_address + " to ";
                summaryPanel.innerHTML += route.legs[i].end_address+ "<br>";
                summaryPanel.innerHTML +=
                route.legs[i].distance.text + " and it take " + route.legs[i].duration.text + " to reach."
                + "<br><br>";

                distanceKm += parseFloat(route.legs[i].distance.text);
            }
            dateDiff(distanceKm);
            vehicleScroll();
        } 
        else {
            window.alert('Please enter a Starting and Finishing location in New Zealand');
        }
    }
    );
}


$('#start, #end').click(function(){
    $(this).val('');
});


function paymentComplete(){

    let userName = document.getElementById("usersName").value;

    $(".modalPaymentContainer--form__button").click(function(){

        $(".modalPayment-header").empty().append(

            `
            <h5 class="modalPayment-header__titleFinal" id="paymentModalLabel">Payment</h5>
            `
        );

        $(".modalPaymentContainer").empty().append(

            `
            <div class="bookingComplete">
            <h1 class="bookingComplete--header">Thank you for booking with us ${userName}!</h1>
            <h3 class="bookingComplete--subText">An Email has been sent to you with your booking itinery</h3>

            <a href="index.html"><button class="bookingComplete--button">Back to Home</button></a>

            </div>
            `
        );
    });
}


vehicleFilterBtn.addEventListener('click', userSubmit);
payment.addEventListener('click', paymentComplete);
