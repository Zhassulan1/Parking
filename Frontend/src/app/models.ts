export interface Token{
    access: String;
    refresh: String;
}

export interface Parking {
    parking_id: Number,
    map: String,
    address: String,
    lat: number,
    lon: number,
    is_paid: boolean,
    price: string,
    free_spaces: Number,
    capacity: Number
}