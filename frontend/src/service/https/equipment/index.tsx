import { EquipmentsInterface } from "../../../interface/IEquipment"; // Update the import path as necessary

const apiUrl = "http://localhost:3036";

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

async function GetEquipment() {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    return await fetchData(`${apiUrl}/equips`, requestOptions);
}

async function GetEquipmentById(id: number | undefined) {
    if (id === undefined) return false;

    const requestOptions = {
        method: "GET",
    };

    return await fetchData(`${apiUrl}/equip/${id}`, requestOptions);
}

async function CreateEquipment(data: EquipmentsInterface) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };

    return await fetchData(`${apiUrl}/equips`, requestOptions);
}

async function UpdateEquipment(data: EquipmentsInterface) {
    const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };

    return await fetchData(`${apiUrl}/equips`, requestOptions);
}

async function DeleteEquipmentByID(id: number | undefined) {
    if (id === undefined) return false;

    const requestOptions = {
        method: "DELETE",
    };

    return await fetchData(`${apiUrl}/equips/${id}`, requestOptions);
}

export { GetEquipment, GetEquipmentById, CreateEquipment, UpdateEquipment, DeleteEquipmentByID };
