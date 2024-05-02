var usePublicTransportYes = document.getElementById("use_public_transport_yes");
var usePublicTransportNo = document.getElementById("use_public_transport_no");
var conditionalQuestion = document.getElementById("conditional_question");

usePublicTransportYes.addEventListener("change", function () {
    if (usePublicTransportYes.checked) {
        conditionalQuestion.style.display = "block";
    } else {
        conditionalQuestion.style.display = "none";
    }
});

usePublicTransportNo.addEventListener("change", function () {
    if (usePublicTransportNo.checked) {
        conditionalQuestion.style.display = "none";
    }
});






function calculateAll() {

const vehicle = document.querySelector('input[name="vehicle"]:checked').value;
const dailyTravel = document.querySelector('input[name="daily_travel"]:checked').value;
const monthlyBill = document.querySelector('input[name="monthly_bill"]:checked').value;
const cylinder = document.querySelector('input[name="cylinders_required"]').value;
const flight = document.querySelector('input[name="travel_by_flight"]:checked').value;

let carbonFootprint = 0;

if (vehicle === "2-wheeler") {
carbonFootprint += 0.3;
} else if (vehicle === "3-wheeler") {
carbonFootprint += 0.3;
} else if (vehicle === "4-wheeler") {
carbonFootprint += 0.3;
}

if (dailyTravel === "0-10km") {
carbonFootprint += 55 * 0.2 * 365;
} else if (dailyTravel === "10-20km") {
carbonFootprint += 15 * 0.2 * 365;
} else if (dailyTravel === "20-30km") {
carbonFootprint += 25 * 0.2 * 365;
} else if (dailyTravel === "30km_or_more") {
carbonFootprint += 40 * 0.2 * 365;
}

if (monthlyBill === "1k-2k") {
carbonFootprint += 1.5 * 1000 * 12 * 0.5 * 0.2;
} else if (monthlyBill === "2k-4k") {
carbonFootprint += 3 * 1000 * 12 * 0.5 * 0.2;
} else if (monthlyBill === "4k-5k") {
carbonFootprint += 4.5 * 1000 * 12 * 0.5 * 0.2;
} else if (monthlyBill === "5k_or_more") {
carbonFootprint += 6 * 1000 * 12 * 0.5 * 0.2;
}

if (!isNaN(cylinder)) {
carbonFootprint += parseFloat(cylinder) * 7.47 * 1.8;
}

if (flight === "often") {
carbonFootprint += 4;
} else if (flight === "few_times") {
carbonFootprint += 3;
} else if (flight === "too_often") {
carbonFootprint += 5;
} else if (flight === "does_not_travel_by_plane") {
carbonFootprint += 1;
}


const usePublicTransport = document.querySelector('input[name="use_public_transport"]:checked').value;
let publicTransportCarbonFootprint = 0;

if (usePublicTransport === "yes") {
const publicTransportTravel = document.querySelector('input[name="public_transport_travel"]:checked').value;

if (publicTransportTravel === "0-10km") {
publicTransportCarbonFootprint += 5 * 0.1 * 365;
} else if (publicTransportTravel === "10-20km") {
publicTransportCarbonFootprint += 15 * 0.1 * 365;
} else if (publicTransportTravel === "20-30km") {
publicTransportCarbonFootprint += 25 * 0.1 * 365;
} else if (publicTransportTravel === "30km_or_more") {
publicTransportCarbonFootprint += 40 * 0.1 * 365;
}
}


carbonFootprint += publicTransportCarbonFootprint;




const CarbonFootprint = carbonFootprint / 1000;

const totalCarbonFootprint = CarbonFootprint;

   
localStorage.setItem("CarbonFootprintResult", totalCarbonFootprint);

    
 window.location.href = "result.html";




}