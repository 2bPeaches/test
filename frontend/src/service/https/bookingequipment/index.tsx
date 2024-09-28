import { BookingEquipmentInterface } from "../../../interface/IBookingEquipment";

const apiUrl = "http://localhost:3036";

// Helper function for handling fetch requests
const fetchData = async (url: string, options: RequestInit) => {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.status === 204 ? true : await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        return false;
    }
};

//--------------------------------------------------Booking Equipment---------------------------------------------------
async function GetEquipmentBooking() {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    return await fetchData(`${apiUrl}/equipment-bookings`, requestOptions);
}

async function GetEquipmentBookingId(id: number | undefined) {
    if (id === undefined) return false;

    const requestOptions = {
        method: "GET",
    };

    return await fetchData(`${apiUrl}/equipment-bookings/${id}`, requestOptions);
}

async function CreateEquipmentBooking(data: BookingEquipmentInterface) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };

    return await fetchData(`${apiUrl}/equipment-bookings`, requestOptions);
}

async function UpdateEquipmentBooking(data: BookingEquipmentInterface) {
    const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };

    return await fetchData(`${apiUrl}/equipment-bookings`, requestOptions);
}

async function DeleteEquipmentBookingID(id: number | undefined) {
    if (id === undefined) return false;

    const requestOptions = {
        method: "DELETE",
    };

    return await fetchData(`${apiUrl}/equipment-bookings/${id}`, requestOptions);
}

export { GetEquipmentBooking, GetEquipmentBookingId, CreateEquipmentBooking, UpdateEquipmentBooking, DeleteEquipmentBookingID };
